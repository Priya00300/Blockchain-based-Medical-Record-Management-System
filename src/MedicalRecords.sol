// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/access/AccessControl.sol";

contract MedicalRecords is AccessControl{
    bytes32 public constant DOCTOR_ROLE = keccak256("DOCTOR_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    struct Patient {
         string name;
         string email;
         address walletAddress;
         uint registrationDate;
    }

    struct Doctor{
        string name;
        string email;
        address walletAddress;
        uint registrationDate;
    }
    struct Record{
        string ipfsHash;
        uint timestamp;
        address doctor;
        string recordType;
        string description;
    }
    mapping(address => Patient) public patients;
    mapping(address => Doctor) public doctors;
    mapping(address => mapping(string => Record[])) public patientRecords;
    mapping(address =>address[]) public authorizedDoctors;

    uint public recordCounter;

    event PatientRegistered(address indexed patientAddress, string name, string email);
    event DoctorRegistered(address indexed doctorAddress, string name, string email);
    event RecordAdded(address indexed patientAddress,uint recordId, address indexed doctorAddress, string recordType, string description, string ipfsHash);
    constructor ()  
    {
        _grantRole(ADMIN_ROLE, msg.sender);
    }
}