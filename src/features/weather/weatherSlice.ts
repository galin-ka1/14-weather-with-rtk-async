import { createSlice } from "@reduxjs/toolkit";
import {fetchWeather} from "../api/fetchWeather.ts";
import type {WeatherInfo} from "../../utils/types";


const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherInfo,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.city = '';
                state.temp = NaN;
                state.pressure = NaN;
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.city = 'Enter correct city name',
                state.temp = NaN,
                state.pressure = NaN
            })
            .addCase (fetchWeather.fulfilled, (_state, action) => action.payload)

    }
});

export default weatherSlice.reducer;

