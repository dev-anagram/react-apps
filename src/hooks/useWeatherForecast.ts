import { useEffect, useState } from "react";
import type { ForecastData } from "../types/weatherForecast";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_NAME = import.meta.env.VITE_API_NAME;

export function useForecast(city: string){
    const [dataF, setDataF] = useState<ForecastData | null>(null);
    const [loadingF, setLoadingF] = useState(true);
    const [errorF, setErrorF] = useState<string | null>(null);

    useEffect(() => {
        async function fetchForecast() {
            setLoadingF(true);
            setErrorF(null);
            try{
                const response = await fetch(
                    `${API_NAME}/forecast?q=${city}&appid=${API_KEY}&units=metric`
                );
                if (!response.ok){
                    throw new Error("Fetching forecast failed");
                }

                const json: ForecastData = await response.json();
                setDataF(json);
            } catch(err) {
                setErrorF((err as Error).message);
            } finally {
                setLoadingF(false);
            }
        };

        fetchForecast();
    }, [city]);

    return {dataF, loadingF, errorF};
}
