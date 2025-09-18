import { Droplets, Eye, Wind, Sun, CloudRain, CloudDrizzle, CloudSnow, Cloud, Ban, Haze, CloudLightning } from "lucide-react";
import { useWeather } from "../hooks/useWeather";
import { useForecast } from "../hooks/useWeatherForecast";
import { useState } from "react";
import {format } from "date-fns";

function formatDateMain(timestamp: number): string {
    return format(new Date(timestamp * 1000), "EEEE dd MMMM");
}

function formatDateForecast(timestamp: number): string {
    return format(new Date(timestamp * 1000), "dd MMM");
}

function getIcon(weather: string, size: number) {
    switch (weather) {
        case 'Thunderstorm':
            return <CloudLightning className="mx-auto" size={size} />
        case 'Drizzle':
            return <CloudDrizzle className="mx-auto" size={size} />
        case 'Rain':
            return <CloudRain className="mx-auto" size={size} />
        case 'Snow':
            return <CloudSnow className="mx-auto" size={size} />
        case 'Atmosphere':
            return <Haze className="mx-auto" size={size} />
        case 'Clear':
            return <Sun className="mx-auto" size={size} />
        case 'Clouds':
            return <Cloud className="mx-auto" size={size} />
        default:
            <Ban className="mx-auto" size={size} />
            return
    }
}

export default function Weather(){
    const [city, setCity] = useState("Warsaw");
    const { data, loading, error } = useWeather(city);
    const { dataF, loadingF, errorF } = useForecast(city);

    return(
        // wrapper
        <div className="flex flex-col items-center gap-4">
            <input id="CityIn" className="border p-2 rounded text-white" placeholder="Enter City" type="text" value={city} onChange={(e) => setCity(e.target.value)} />

            {data &&
                <div className="font-mono text-center items-center align-middle text-black grid grid-cols-1 p-6 bg-linear-to-br to-yellow-500 from-yellow-200 rounded-4xl w-auto h-min relative border-solid border-3">
                    {/* City */}
                    <div className="font-bold text-2xl mb-3">{data.name}</div>
                    {/* date */}
                    <div className="font-medium text-lg bg-black text-yellow-400 rounded-xl px-3 py-1 my-2 mx-auto w-min text-nowrap">{formatDateMain(data.dt)}</div>
                    {/* weather */}
                    <div className="font-bold text-lg">{data.weather[0].description}</div>
                    {/* temperature */}
                    {/* <img className="mx-auto" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} /> */}
                    {getIcon(data.weather[0].main, 50)}
                    <div className="text-9xl">{Math.round(data.main.temp)}&#176;</div>
                    {/* wind / humidity / visibility */}
                    <div className="grid grid-cols-3 gap-1 bg-black rounded-2xl text-yellow-400 px-5 py-2">
                        <div className="weather-attribute">
                            <Wind className="mx-auto " size={40}/>
                            <p className="weather-item">{data.wind.speed.toFixed(2)}km/h</p>
                            <p className="weather-item-desc">Wind</p>
                        </div>
                        <div className="weather-attribute">
                            <Droplets className="mx-auto " size={40}/>
                            <p className="weather-item">{data.main.humidity}%</p>
                            <p className="weather-item-desc">Humidity</p>
                        </div>
                        <div className="weather-attribute">
                            <Eye className="mx-auto" size={40}/>
                            <p className="weather-item">{data.visibility / 1000}km</p>
                            <p className="weather-item-desc">Visibility</p>
                        </div>
                    </div>
                    {/* forecast */}
                    {dataF &&
                    <>
                        <div className="font-bold text-lg mt-2">Weekly forecast</div>
                        <div className="flex justify-center gap-2">
                            <div className="weather-forecast-item">
                                <p className="weather-forecast-temp">{Math.round(dataF.list[4].main.temp)}&#176;</p>
                                {/* <Sun className="mx-auto "/> */}
                                {/* <img className="mx-auto object-contain w-10" src={`https://openweathermap.org/img/wn/${dataF.list[5].weather[0].icon}@2x.png`} alt={data.weather[0].description} /> */}
                                {getIcon(dataF.list[4].weather[0].main, 30)}
                                <p className="weather-forecast-date">{formatDateForecast(dataF.list[4].dt)}</p>
                            </div>
                            <div className="weather-forecast-item">
                                <p className="weather-forecast-temp">{Math.round(dataF.list[12].main.temp)}&#176;</p>
                                {/* <CloudRain className="mx-auto"/> */}
                                {/* <img className="mx-auto object-contain w-10" src={`https://openweathermap.org/img/wn/${dataF.list[15].weather[0].icon}@2x.png`} alt={data.weather[0].description} /> */}
                                {getIcon(dataF.list[12].weather[0].main, 30)}
                                <p className="weather-forecast-date">{formatDateForecast(dataF.list[12].dt)}</p>
                            </div>
                            <div className="weather-forecast-item">
                                <p className="weather-forecast-temp">{Math.round(dataF.list[20].main.temp)}&#176;</p>
                                {/* <Droplet className="mx-auto" /> */}
                                {/* <img className="mx-auto object-contain w-10" src={`https://openweathermap.org/img/wn/${dataF.list[25].weather[0].icon}@2x.png`} alt={data.weather[0].description} /> */}
                                {getIcon(dataF.list[20].weather[0].main, 30)}
                                <p className="weather-forecast-date">{formatDateForecast(dataF.list[20].dt)}</p>
                            </div>
                            <div className="weather-forecast-item">
                                <p className="weather-forecast-temp">{Math.round(dataF.list[28].main.temp)}&#176;</p>
                                {/* <Zap className="mx-auto" /> */}
                                {/* <img className="mx-auto object-contain w-10" src={`https://openweathermap.org/img/wn/${dataF.list[35].weather[0].icon}@2x.png`} alt={data.weather[0].description} /> */}
                                {getIcon(dataF.list[28].weather[0].main, 30)}
                                <p className="weather-forecast-date">{formatDateForecast(dataF.list[28].dt)}</p>
                            </div>
                        </div>
                    </>
                    }
                    {loadingF && <p className="text-white">Loading forecast</p>}
                    {errorF && <p className="text-white">Error: {errorF}</p>}
                </div>
            }
            {loading && <p className="text-white">Loading weather</p>}
            {error && <p className="text-white">Error: {error}</p>}
        </div>
    )
}
