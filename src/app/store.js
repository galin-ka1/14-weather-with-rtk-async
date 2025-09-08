"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var weatherSlice_ts_1 = require("../features/weather/weatherSlice.ts");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        weather: weatherSlice_ts_1.default
    }
});
