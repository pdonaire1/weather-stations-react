export class WeatherService {
  url:string = "http://localhost:8000/";

  requestWeather(): any {
    return fetch(this.url + "weather", {
      headers: {
        'Accept': 'application/json'
      },
      method: "GET"
    }).then(res => res.json());
  }
}