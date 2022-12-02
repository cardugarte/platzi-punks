//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract PlatziPunks is ERC721, ERC721Enumerable {
  uint256 public maxSupply;
  using Counters for Counters.Counter;
  Counters.Counter private _idCounter;

  constructor(uint256 _maxSupply) ERC721("PlatziPunks", "PLPKS") {
    maxSupply = _maxSupply;
  }

  function mint() public {
    uint256 current = _idCounter.current();
    require(current < maxSupply, "No PlatziPunks left :(");
    _safeMint(msg.sender, current);
  }

  function tokenURI(uint256 tokenId)
    public
    view
    override
    returns(string memory) {
      require(_exists(tokenId), "ERC721 Metadata: URI query for nonexistent token");
      bytes memory jsonURI = abi.encodePacked(
            '"name" : "Platzi Punks"', 
            tokenId,
            '", "description" : "Randomized Avatars", "image" : ", '
            "// TODO : calculate images URL",
            '"}'
        ); 

        return string (
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(jsonURI)
            )   
        );
  }

  //override required
  function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}