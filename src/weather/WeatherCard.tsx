import * as React from 'react';
import { WeatherForm } from './WeatherForm';
import { WeatherComments } from './WeatherComments';
import { IWeather } from './store/weather';
interface WeatherCardProps {
  weather: IWeather
  disabled?: boolean
}

export class WeatherCard extends React.Component<WeatherCardProps> {
  renderCoordinates = (coordinates:any) => {
    return (<div className="wrapper">
      <div className="sub-title column">Coordinates:</div>
      <div className="column">
        {coordinates.n && <span>{coordinates.n} N° </span>}
        {coordinates.s && <span>{coordinates.s} S° </span>}
        {coordinates.e && <span>{coordinates.e} E° </span>}
        {coordinates.w && <span>{coordinates.w} W° </span>}
      </div>
    </div>);
  }
  render() {
    const { weather } = this.props;
    return (
      <div key={weather.id} className="card-box">
        <div className="card">
          <div className="container">
            <div className="sub-title">{weather.city}</div>
            <div className="wrapper">
              <div className="column sub-title">Wind Speed:</div>
              <div className="column">{weather.windSpeed}</div>
            </div>
            {this.renderCoordinates(weather.coordinates)}
            {!this.props.disabled && <WeatherForm id={weather.id}/>}
            <WeatherComments weather={weather}/>
          </div>
          
        </div>

      </div>
    )
  }
}
