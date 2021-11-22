// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract VehicleRecord {
    struct VehicleReport {
        address owner;
        string VIN;
        uint256 odometer;
        string service;
        uint256 timestamp;
    }

    VehicleReport[] reports;

    constructor() {}

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
        return (report.VIN, report.odometer, report.service, report.timestamp);
    }

    function getNumReport() public view returns (uint256) {
        return reports.length;
    }
}
