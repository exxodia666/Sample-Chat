"use strict";
exports.__esModule = true;
exports.Logout = exports.AuthUserCancel = exports.AuthUserError = exports.AuthUserSuccess = exports.AuthUser = void 0;
var auth_action_types_1 = require("./auth_action_types");
exports.AuthUser = function (user) {
    return {
        type: auth_action_types_1.AUTH_START,
        payload: user
    };
};
exports.AuthUserSuccess = function (payload) {
    return {
        type: auth_action_types_1.AUTH_SUCCESS,
        payload: payload
    };
};
exports.AuthUserError = function (payload) {
    return {
        type: auth_action_types_1.AUTH_ERROR,
        payload: payload
    };
};
exports.AuthUserCancel = function () {
    return {
        type: auth_action_types_1.AUTH_CANCEL
    };
};
exports.Logout = function () {
    return {
        type: auth_action_types_1.LOGOUT
    };
};
