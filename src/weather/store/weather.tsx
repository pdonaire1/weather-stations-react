import { observable, action, autorun } from 'mobx'
import { WeatherService } from "../services";
import { runInThisContext } from 'vm';
const client = new WeatherService();

export interface ICoordinates {
  n?: string,
  s?: string,
  e?: string,
  w?: string
}

export interface IWeather {
  coordinates: ICoordinates,
  windSpeed: string
}

export class WeatherStore {
  weatherList: IWeather[] = []
  @observable error: boolean = false
  @observable loading: boolean = false
  
  constructor(){
    this.weatherList = observable([]);
  }

  @action
  requestWeatherList = async () => {
    this.error = false;
    this.loading = true;
    try {
      const response = await client.requestWeather();
      this.weatherList = response.map( (data: any) => {
        return {
          coordinates: data.coordinates,
          windSpeed: data.wind_speed
        }});
    } catch (error) {
      this.error = true;
      this.weatherList = [];
    }
    this.loading = false
  }
}

export const weatherStore = new WeatherStore()