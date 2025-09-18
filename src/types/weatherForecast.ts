export interface ForecastData{
    list:{
        dt: number;
        main:{
            temp: number;
        };
        weather:{
            main: string;
            description: string;
            icon: string;
        }[];
    }[];
};
