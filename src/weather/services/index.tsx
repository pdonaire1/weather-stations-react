export class WeatherService {
  url:string = "https://localhost:8080/";

  requestWeather(): any {
    return fetch(this.url, {
      headers: {
        'Accept': 'application/json'
      },
      method: "GET"
    }).then(res => res.json());
  }
}