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
var auth_action_types_1 = require("./../actions/auth_action_types");
var auth_actions_1 = require("./../actions/auth_actions");
var operators_1 = require("rxjs/operators");
var auth_action_types_2 = require("../actions/auth_action_types");
var axios_1 = require("axios");
var redux_observable_1 = require("redux-observable");
var operators_2 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var register_types_1 = require("../../registration/actions/register_types");
/**
 * @param data
 * Send data in format {
 *  username: string;
 *  password: string;
 *  }
 */
var auth_user = function (data) {
    var fd = new FormData();
    fd.append('grant_type', 'password');
    fd.append('username', data.username);
    fd.append('password', data.password);
    console.log(fd);
    return axios_1["default"]({
        method: 'POST',
        url: 'http://134.249.181.40:7777/token',
        data: fd
    });
};
var auth_user_fake = function (data) {
    var fd = new FormData();
    fd.append('grant_type', 'password');
    fd.append('username', data.username);
    fd.append('password', data.password);
    console.log(fd);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            //reject({ detail: 'Wrong password!' })
            //reject({ detail: 'You are not registered!' })
            resolve({
                data: {
                    access_token: "dsf3224$pidasdasfsake",
                    token_type: "bearer"
                }
            });
            //reject({ detail: 'error' })
        }, 3000);
    });
};
var fetchUserEpic = function (action$, state$) {
    return action$.pipe(redux_observable_1.ofType(auth_action_types_1.AUTH_START, register_types_1.SEND_USER_SUCCESS), operators_2.mergeMap(function (action) {
        return rxjs_1.from(auth_user_fake({ username: action.payload.username, password: action.payload.password })).pipe(operators_2.map(function (response) { return auth_actions_1.AuthUserSuccess(__assign(__assign({}, response.data), { username: action.payload.username })); }), operators_2.catchError(function (error) {
            console.log(error);
            return rxjs_1.of(auth_actions_1.AuthUserError(error.detail));
        }), operators_1.takeUntil(action$.pipe(redux_observable_1.ofType(auth_action_types_2.AUTH_CANCEL))));
    }));
};
exports["default"] = fetchUserEpic;
