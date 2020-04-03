export interface IForecast {
  clouds: IClouds;
  dt: number;
  dt_txt: string;
  main: IMain;
  sys: ISys;
  weather: IWeather[];
  wind: IWind;
}

export interface IClouds {
  all?: number;
}

export interface IMain {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

export interface ISys {
  pod: string;
}

export interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface IWind {
  deg: number;
  speed: number;
}
