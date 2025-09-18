export interface WeatherData{
    name: string;
    dt: number;
    main:{
        temp: number;
        humidity: number;
    };
    weather:{
        main: string;
        description: string;
        icon: string;
    }[];
    wind:{
        speed: number;
    };
    visibility: number;
};
