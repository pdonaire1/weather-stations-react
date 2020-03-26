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

export interface IComment {
  comment: string,
  time?: string
}
export interface IWeather {
  id: string,
  city: string,
  coordinates: ICoordinates,
  windSpeed: string,
  comments?: IComment[]
}

export class WeatherStore {
  @observable weatherList: IWeather[] = []
  @observable error: boolean = false
  @observable loading: boolean = false
  @observable journalPage: number = 1
  @observable journalPages: number = 1
  @observable weatherJournal: IWeather[] = []
  @observable errorJournal: boolean = false
  @observable loadingJournal: boolean = false
  
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
          id: data.id,
          city: data.city,
          coordinates: data.coordinates,
          windSpeed: data.wind_speed,
          comments: data.comments
        }});
    } catch (error) {
      this.error = true;
      this.weatherList = [];
    }
    this.loading = false
  }

  @action
  changePage = (page:number) => {
    this.journalPage = page;
    this.requestWeatherJournal();
  }

  @action
  requestWeatherJournal = async () => {
    this.errorJournal = false;
    this.loadingJournal = true;
    try {
      const response = await client.requestWeatherJournal(this.journalPage);
      this.journalPages = response.count;
      this.weatherJournal = response.results.map( (data: any) => {
        return {
          id: data.id,
          city: data.city,
          coordinates: data.coordinates,
          windSpeed: data.wind_speed,
          comments: data.comments
        }});
    } catch (error) {
      this.errorJournal = true;
      this.weatherJournal = [];
    }
    this.loadingJournal = false
  }

  @action
  createObservation = async (id: string, observation: string) => {
    try {
      const response = await client.createObservation(id, observation);
      const index = this.weatherList.findIndex((weather) => weather.id === id);
      this.weatherList[index] = {
        ...this.weatherList[index],
        comments: this.weatherList[index].comments ? [response].concat(this.weatherList[index].comments) : [response]}
    } catch (error) {
      console.error(error);
    }
  }
}

export const weatherStore = new WeatherStore()