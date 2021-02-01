"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Message = function (_a) {
    var image = _a.image, name = _a.name, last_message = _a.last_message, message_count = _a.message_count, last_message_time = _a.last_message_time;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.Image, { source: { uri: image }, style: {
                height: 85,
                width: 85,
                borderRadius: 42.5,
                marginRight: 5,
                marginLeft: 1
            } }),
        react_1["default"].createElement(react_native_1.View, { style: {
                height: '100%'
            } },
            react_1["default"].createElement(react_native_1.Text, { style: { fontFamily: 'Poppins-Medium' } }, name),
            react_1["default"].createElement(react_native_1.Text, null, last_message)),
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.Text, null, last_message_time),
            react_1["default"].createElement(react_native_1.Text, null, message_count))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        alignItems: 'center',
        width: react_native_1.Dimensions.get('screen').width,
        height: 90,
        flexDirection: 'row',
        borderBottomWidth: 0.5
    }
});
exports["default"] = Message;
