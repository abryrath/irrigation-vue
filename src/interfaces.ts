export interface IForecast {
  hour: number;
  humidity: number;
  temp: number;
  feels_like: number;
  description: string;
  summary: string;
  wind_speed: number;
  wind_dir: number;
  pressure: number;
}

export interface IDate {
  year: number;
  month: number;
  day: number;
  weekday: string;
  sunrise: string;
  sunset: string;
  inserted_at: string;
  forecasts: IForecast[];
}

export interface ILastRun {
  inserted_at: string;
}
