"use strict";
exports.__esModule = true;
var react_1 = require("react");
var StackWrapper_1 = require("../../components/StackWrapper/StackWrapper");
var SettingsScreen_1 = require("./SettingsScreen");
var SettingsStack = function () {
    return (react_1["default"].createElement(StackWrapper_1["default"], { name: 'Settings', screen: SettingsScreen_1["default"] }));
};
exports["default"] = SettingsStack;
