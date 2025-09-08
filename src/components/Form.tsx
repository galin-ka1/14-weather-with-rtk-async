import {fetchWeather} from "../features/api/fetchWeather.ts";
import {useAppDispatch} from "../app/hooks.ts";
import { useState } from "react";
import * as React from "react";


const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const getCity = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchWeather(city))
        setCity("");
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };

    return (
        <form onSubmit={getCity}>
            <input type={'text'} placeholder='City' value={city} onChange={handleChange}/>
            <button type='submit'>Get weather</button>
        </form>
    );
};


export default Form;
