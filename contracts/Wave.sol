// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

import { Base64 } from './libraries/Base64.sol';

contract Wave is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event NewWaveMinted(address sender, uint256 tokenId);

    constructor() ERC721 ("Wave", "WAVE") {
        console.log("wave contract is alive!!");
    }

    function makeWave() public {
        uint256 newWaveId = _tokenIds.current();

        // hardcoded for testing
        string memory waveUri = string(
            abi.encodePacked("data:application/json;base64,ewogICJ0b2tlbnMiOiBbCiAgICB7CiAgICAgICJzeW1ib2wiOiAiVVNEQyIsCiAgICAgICJiYWxhbmNlIjogIjEwMC4wMDAwMDAiLAogICAgICAiYWRkcmVzcyI6ICIweDRkYmNkZjliNjJlODkxYTdjZWM1YTI1NjhjM2Y0ZmFmOWU4YWJlMmIiCiAgICB9LAogICAgewogICAgICAic3ltYm9sIjogIkRBSSIsCiAgICAgICJiYWxhbmNlIjogIjEwMC4wMDAwMDAiLAogICAgICAiYWRkcmVzcyI6ICIweDU1OTJlYzBjZmI0ZGJjMTJkM2FiMTAwYjI1NzE1MzQzNmExZjBmZWEiCiAgICB9CiAgXSwKICAibmZ0cyI6IFsKICAgIHsKICAgICAgIm5hbWUiOiAiU3F1YXJlTkZUIiwKICAgICAgImlkIjogIjIiLAogICAgICAiYWRkcmVzcyI6ICIweGViNWE4NGU3ZjFiNTllMGRjYzJmNjI4Yzc4NDk5MThiYTI5NzRjZWIiCiAgICB9LAogICAgewogICAgICAibmFtZSI6ICJTcXVhcmVORlQiLAogICAgICAiaWQiOiAiMSIsCiAgICAgICJhZGRyZXNzIjogIjB4ZWI1YTg0ZTdmMWI1OWUwZGNjMmY2MjhjNzg0OTkxOGJhMjk3NGNlYiIKICAgIH0KICBdLAogICJuYXRpdmVCYWxhbmNlIjogewogICAgImJhbGFuY2UiOiAiMC4wNjU1NiIsCiAgICAic3ltYm9sIjogIlJJTiIKICB9LAogICJhY2NvdW50IjogIm9yaWdpbi5ldGgiLAogICJkZXN0aW5hdGlvbiI6ICJkZXN0aW5hdGlvbi5ldGgiLAogICJzaWduYXR1cmUiOiAib3JpZ2luQWNjb3VudFNpZ25hdHVyZSIKfQ==")
        );

        // mint nft to sender with id set to newItemId
        _safeMint(msg.sender, newWaveId); 

        // setting nft data - what makes it valuable
        _setTokenURI(newWaveId, waveUri);

        _tokenIds.increment();

        console.log("------wave-uri-----");
        console.log(waveUri);
        console.log("------wave-uri-----");

        console.log("WAVE with id %s minted to %s", newWaveId, msg.sender);

        emit NewWaveMinted(msg.sender, newWaveId);
    }
}