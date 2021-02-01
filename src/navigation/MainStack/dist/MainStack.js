"use strict";
exports.__esModule = true;
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var DialogListScreen_1 = require("./DialogListScreen");
var react_native_1 = require("react-native");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var DialogScreen_1 = require("./DialogScreen");
var MainStack = function () {
    var Stack = stack_1.createStackNavigator();
    return (react_1["default"].createElement(Stack.Navigator, { screenOptions: function (props) { return ({
            headerLeft: function () { return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: {
                    //borderWidth: 0.5,
                    width: 60,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }, onPress: function () { props.navigation.toggleDrawer(); } },
                react_1["default"].createElement(Ionicons_1["default"], { name: 'md-menu-outline', size: 35 }))); }
        }); } },
        react_1["default"].createElement(Stack.Screen, { name: "Home", component: DialogListScreen_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: "Dialog", component: DialogScreen_1["default"] })));
};
exports["default"] = MainStack;
/*
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />
*/
