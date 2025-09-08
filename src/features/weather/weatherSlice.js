"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var fetchWeather_ts_1 = require("../api/fetchWeather.ts");
var weatherSlice = (0, toolkit_1.createSlice)({
    name: 'weather',
    initialState: {
        city: '',
        temp: NaN,
        pressure: NaN,
    },
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchWeather_ts_1.fetchWeather.pending, function (state) {
            state.city = '';
            state.temp = NaN;
            state.pressure = NaN;
        })
            .addCase(fetchWeather_ts_1.fetchWeather.rejected, function () {
        })
            .addCase(fetchWeather_ts_1.fetchWeather.fulfilled, function (state, action) {
            var _a = action.payload, city = _a.city, temp = _a.temp, pressure = _a.pressure;
            state.city = city;
            state.temp = temp;
            state.pressure = pressure;
        });
    }
});
exports.default = weatherSlice.reducer;
