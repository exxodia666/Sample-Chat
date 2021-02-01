"use strict";
exports.__esModule = true;
exports.check_empty_fields = void 0;
/**
 * takes object { user_name: string; passwords: string[ ] } and returns an array of indexes of empty fields or false
 * @param data
 */
exports.check_empty_fields = function (data) { return result(data).length ? result(data) : false; };
var result = function (data) { return Object.values(data)
    .map(function (item, index) { return !!item.trim().length ? 0 : index + 1; })
    .filter(function (e) { return e !== 0; }); };
