// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MedicalRecords {
    uint private _recordCounter;
    mapping(uint => string) private _ipfsHashes;

    event RecordAdded(uint recordId, string ipfsHash);

    function addRecord(string memory _ipfsHash) public {
        require(bytes(_ipfsHash).length > 0, "IPFS hash cannot be empty");
        _recordCounter++;
        _ipfsHashes[_recordCounter] = _ipfsHash;
        emit RecordAdded(_recordCounter, _ipfsHash);
    }

    function getRecord(uint _recordId) public view returns (string memory) {
        require(_recordId > 0 && _recordId <= _recordCounter, "Invalid record ID");
        return _ipfsHashes[_recordId];
    }
}
