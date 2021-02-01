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
var drawer_1 = require("@react-navigation/drawer");
var CustomDrawer_1 = require("./CustomDrawer/CustomDrawer");
var MainStack_1 = require("../MainStack/MainStack");
var ContactsStack_1 = require("../ContactsStack/ContactsStack");
var SettingsStack_1 = require("../SettingsStack/SettingsStack");
var MainDrawer = function () {
    var Drawer = drawer_1.createDrawerNavigator();
    return (react_1["default"].createElement(Drawer.Navigator, { initialRouteName: "Home", drawerContent: function (props) { return react_1["default"].createElement(CustomDrawer_1["default"], __assign({}, props)); } },
        react_1["default"].createElement(Drawer.Screen, { name: "Dialogs", component: MainStack_1["default"] }),
        react_1["default"].createElement(Drawer.Screen, { name: "Contacts", component: ContactsStack_1["default"] }),
        react_1["default"].createElement(Drawer.Screen, { name: "Settings", component: SettingsStack_1["default"] })));
};
exports["default"] = MainDrawer;
