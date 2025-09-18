export interface WeatherData{
    name: string;
    dt: number;
    main:{
        temp: number;
        humidity: number;
    };
    weather:{
        description: string;
        icon: string;
    }[];
    wind:{
        speed: number;
    };
    visibility: number;
}
