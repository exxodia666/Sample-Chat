"use strict";
exports.__esModule = true;
var drawer_1 = require("@react-navigation/drawer");
var react_1 = require("react");
var UserName_1 = require("../../../components/DrawerComponents/UserName");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var auth_actions_1 = require("../../../redux/authorization/actions/auth_actions");
var CustomDrawer = function (props) {
    var dispatch = react_redux_1.useDispatch();
    //const handleLogOut = () => { dispatch(Logout)}
    var handleLogOut = function () {
        //navigation.navigate('');
        dispatch(auth_actions_1.Logout());
    };
    return (react_1["default"].createElement(react_native_1.ScrollView, { style: { paddingTop: 0 } },
        react_1["default"].createElement(UserName_1["default"], { username: 'Zagreus', image_url: 'https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/be/Zagreus_intense.png/revision/latest?cb=20191204200158' }),
        react_1["default"].createElement(drawer_1.DrawerItem, { icon: function () { return react_1["default"].createElement(Ionicons_1["default"], { name: 'mail-open-outline', size: 25 }); }, label: "Dialogs", onPress: function () { props.navigation.navigate('Dialogs'); } }),
        react_1["default"].createElement(drawer_1.DrawerItem, { icon: function () { return react_1["default"].createElement(Ionicons_1["default"], { name: 'people-outline', size: 25 }); }, label: "Contacts", onPress: function () { props.navigation.navigate('Contacts'); } }),
        react_1["default"].createElement(drawer_1.DrawerItem, { icon: function () { return react_1["default"].createElement(Ionicons_1["default"], { name: 'options-outline', size: 25 }); }, label: "Settings", onPress: function () { props.navigation.navigate('Settings'); } }),
        react_1["default"].createElement(drawer_1.DrawerItem, { icon: function () { return react_1["default"].createElement(Ionicons_1["default"], { name: 'log-out-outline', size: 25, color: "red" }); }, label: "\u0412\u044B\u0439\u0442\u0438", labelStyle: { color: 'red' }, onPress: function () { handleLogOut(); } })));
};
exports["default"] = CustomDrawer;
