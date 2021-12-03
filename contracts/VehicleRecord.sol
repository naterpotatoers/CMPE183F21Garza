pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract VehicleRecord {
    struct VehicleReport {
        address owner;
        string vin;
        uint256 odometer;
        string service;
        uint256 timestamp;
    }

    VehicleReport[] reports;

    constructor() public {}

    function addReport(
        string memory vin,
        uint256 odometer,
        string memory service
    ) public {
        reports.push(
            VehicleReport(msg.sender, vin, odometer, service, block.timestamp)
        );
    }

    function getReports() public view returns (VehicleReport[] memory) {
        return reports;
    }

    function getReport(uint256 index)
        public
        view
        returns (
            string memory vin,
            uint256 odometer,
            string memory service,
            uint256 timestamp
        )
    {
        VehicleReport memory report = reports[index];
        return (report.vin, report.odometer, report.service, report.timestamp);
    }

    function getNumReport() public view returns (uint256) {
        return reports.length;
    }
}
