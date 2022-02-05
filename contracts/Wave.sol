// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

import { Base64 } from './libraries/Base64.sol';

contract Wave is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // list of all waves minted by an address
    mapping(address => uint256[]) public mintedByAddress;

    // map of waves minted by an address 
    mapping(uint256 => address) public mintedById;

    event NewWaveMinted(address _destination, uint256 _tokenId);

    event WaveBurned(address _burnedBy, uint256 _tokenId);

    constructor() ERC721 ("Wave", "WAVE") {
        console.log("wave contract is alive!!");
    }

    function isMinter(address _addr, uint256 _tokenId) public view returns (bool) {
        return mintedById[_tokenId] == _addr;
    }

    function wavesMinted() public view returns (uint[] memory) {
        return mintedByAddress[msg.sender];
    }

    function makeWave(string memory _waveData, address _destination) public {
        uint256 newWaveId = _tokenIds.current();

        string memory waveUri = string(abi.encodePacked(_waveData));

        // mint to sender with id set to newItemId
        _safeMint(_destination, newWaveId); 

        mintedByAddress[msg.sender].push(newWaveId);
        mintedById[newWaveId] = msg.sender;

        // setting data
        _setTokenURI(newWaveId, waveUri);

        _tokenIds.increment();

        console.log("WAVE with id %s minted to %s", newWaveId, _destination);

        emit NewWaveMinted(_destination, newWaveId);
    }

    function burnWave(uint256 _tokenId) public {
        require(isMinter(msg.sender, _tokenId), "only the minting address can burn");

        address owner = ERC721.ownerOf(_tokenId);

        _transfer(owner, msg.sender, _tokenId);

        _burn(_tokenId);

        // remove tokens minted by address
        console.log("wave %s burned", _tokenId);
    }
}