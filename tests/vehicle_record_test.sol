// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// This import is automatically injected by Remix
import "remix_tests.sol";
import "remix_accounts.sol";
import "../contracts/vehicle_record.sol";

// Use 'Assert' methods: https://remix-ide.readthedocs.io/en/latest/assert_library.html
contract VehicleRecordTest {
    VehicleRecord vr;

    function beforeAll() public {
        vr = new VehicleRecord();
    }

    function checkGetNumReport() public {
        Assert.equal(
            vr.getNumReport(),
            uint256(0),
            "should have 0 reports saved to array"
        );
    }

    function checkAddReports() public {
        vr.addReport("12345678910111213", 99999, "service report 1");
        vr.addReport("12345678910111213", 99999, "service report 2");
        vr.addReport("12345678910111213", 99999, "service report 3");
        vr.addReport("12345678910111213", 99999, "service report 4");
        Assert.equal(
            vr.getNumReport(),
            uint256(4),
            "should have 4 reports saved to array"
        );
    }
}
