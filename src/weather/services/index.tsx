
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

  createObservation(id: string, observations: string): any {
    return fetch(this.url + "weather-observations/", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"fk_weather_id": id, "comment": observations}),
      method: "POST"
    }).then(res => res.json());
  }

  requestWeatherJournal(page: number = 1): any {
    return fetch(this.url + `weather-journal/?page=${page}`, {
      headers: {
        'Accept': 'application/json'
      },
      method: "GET"
    }).then(res => res.json());
  }
}