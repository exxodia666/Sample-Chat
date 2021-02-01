"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var ToggleButton = function (props) {
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: {
            //borderWidth: 0.5,
            width: 60,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }, onPress: function () { props.navigation.toggleDrawer(); } },
        react_1["default"].createElement(Ionicons_1["default"], { name: 'md-menu-outline', size: 35 })));
};
exports["default"] = ToggleButton;
