var VehicleRecord = artifacts.require("./VehicleRecord.sol");
var TodoList = artifacts.require("./TodoList.sol");

module.exports = function (deployer) {
  deployer.deploy(VehicleRecord);
  deployer.deploy(TodoList);
};
