import { createSlice } from "@reduxjs/toolkit";
import {fetchWeather} from "../api/fetchWeather.ts";


const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: '',
        temp: NaN,
        pressure: NaN,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.city = '';
                state.temp = NaN;
                state.pressure = NaN;
            })
            .addCase(fetchWeather.rejected, () => {

            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                const { city, temp, pressure } = action.payload;
                state.city = city;
                state.temp = temp;
                state.pressure = pressure;
            });
    }
});

export default weatherSlice.reducer;

