export class WeatherService {
  url:string = "https://weather-stations-api.herokuapp.com/";

  requestWeather(): any {
    return fetch(this.url + "weather", {
      headers: {
        'Accept': 'application/json'
      },
      method: "GET"
    }).then(res => res.json());
  }
}