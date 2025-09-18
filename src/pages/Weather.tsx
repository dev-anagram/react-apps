import { Droplets, Eye, Wind, Sun, CloudRain, Droplet, Zap } from "lucide-react";
import { useWeather } from "../hooks/useWeather";
import { useState } from "react";

export default function Weather(){
    const [city, setCity] = useState("Warsaw");
    const { data, loading, error } = useWeather(city);

    if(loading) {
        return <p className="text-white">Loading weather</p>;
    }

    // if(error) {
    //     return <p className="text-white">Error: {error}</p>;
    // }

    // if(!data) return null;

    return(
        // wrapper
        <div className="flex flex-col items-center gap-4">
            <input className="border p-2 rounded text-white" placeholder="Enter City" type="text" value={city} onChange={(e) => setCity(e.target.value)} />

            {loading && <p className="text-white">Loading weather</p>}
            {error && <p className="text-white">Error: {error}</p>}

            {data &&
                <div className="font-mono text-center items-center align-middle text-black grid grid-cols-1 p-6 bg-linear-to-br to-yellow-500 from-yellow-200 rounded-4xl w-auto h-min relative border-solid border-3">
                    {/* City */}
                    <div className="font-bold text-2xl mb-3">{city}</div>
                    {/* date */}
                    <div className="font-medium text-lg bg-black text-yellow-400 rounded-xl px-3 py-0 pt-1 my-2 mx-auto w-min text-nowrap">friday 20 january</div>
                    {/* weather */}
                    <div className="font-bold text-lg">{data.weather[0].description}</div>
                    {/* temperature */}
                    <div className="text-9xl">{Math.round(data.main.temp)}</div>
                    {/* wind / humidity / visibility */}
                    <div className="grid grid-cols-3 gap-1 bg-black rounded-2xl text-yellow-400 px-5 py-2">
                        <div className="weather-attribute">
                            <Wind className="mx-auto " size={40}/>
                            <p className="weather-item">3km/h</p>
                            <p className="weather-item-desc">Wind</p>
                        </div>
                        <div className="weather-attribute">
                            <Droplets className="mx-auto " size={40}/>
                            <p className="weather-item">48%</p>
                            <p className="weather-item-desc">Humidity</p>
                        </div>
                        <div className="weather-attribute">
                            <Eye className="mx-auto" size={40}/>
                            <p className="weather-item">1.6km</p>
                            <p className="weather-item-desc">Visibility</p>
                        </div>
                    </div>
                    {/* forecast */}
                    <div className="font-bold text-lg mt-2">Weekly forecast</div>
                    <div className="flex justify-center gap-2">
                        <div className="weather-forecast-item">
                            <p className="weather-forecast-temp">26&#176;</p>
                            <Sun className="mx-auto "/>
                            <p className="weather-forecast-date">21 jan</p>
                        </div>
                        <div className="weather-forecast-item">
                            <p className="weather-forecast-temp">25&#176;</p>
                            <CloudRain className="mx-auto"/>
                            <p className="weather-forecast-date">22 jan</p>
                        </div>
                        <div className="weather-forecast-item">
                            <p className="weather-forecast-temp">27&#176;</p>
                            <Droplet className="mx-auto" />
                            <p className="weather-forecast-date">23 jan</p>
                        </div>
                        <div className="weather-forecast-item">
                            <p className="weather-forecast-temp">26&#176;</p>
                            <Zap className="mx-auto" />
                            <p className="weather-forecast-date">24 jan</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
