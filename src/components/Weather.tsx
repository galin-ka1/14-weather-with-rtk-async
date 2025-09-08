import {useAppSelector} from "../app/hooks.ts";

const Weather = () => {
    const weather = useAppSelector(state => state.weather);

    return (
        <div className={'infoWeather'}>
            <p>Location: {weather.city}</p>
            <p>Temp: {weather.temp}</p>
            <p>Pressure: {weather.pressure}</p>
        </div>
    );
};


export default Weather;
