"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var ToggleButton_1 = require("./ToggleButton");
var StackWrapper = function (_a) {
    var screen = _a.screen, name = _a.name;
    var Stack = stack_1.createStackNavigator();
    return (react_1["default"].createElement(Stack.Navigator, { screenOptions: function (props) { return ({
            headerLeft: function () { return (react_1["default"].createElement(ToggleButton_1["default"], __assign({}, props))); }
        }); } },
        react_1["default"].createElement(Stack.Screen, { name: "Contacts", component: screen })));
};
exports["default"] = StackWrapper;
