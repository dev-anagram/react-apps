import { useEffect, useState } from "react";
import type { WeatherData } from "../types/weather";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_NAME = import.meta.env.VITE_API_NAME;

export function useWeather(city: string){
    const [data, setData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchWeather() {
            setLoading(true);
            setError(null);

            try{
                const response = await fetch(
                    `${API_NAME}/weather?q=${city}&appid=${API_KEY}&units=metric`
                );
                if (!response.ok){
                    throw new Error("Fetching data failed");
                }

                const json: WeatherData = await response.json();
                setData(json);
            } catch(err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);

    return {data, loading, error};
}
