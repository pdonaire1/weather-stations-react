import * as React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react'
import { WeatherStore } from './store/weather'

interface WeatherListProps {
  weatherStore?: WeatherStore
}

@inject('weatherStore')
@observer
export class Weather extends React.Component<WeatherListProps> {
  componentDidMount = () => {
    const { requestWeatherList } = this.props.weatherStore!;
    requestWeatherList();
  }
  renderCoordinates = (coordinates:any) => {
    return (<div>
      <h3>Coordinates:</h3>
      {coordinates.n && <span>{coordinates.n} N°</span>}
      {coordinates.s && <span>{coordinates.s} S°</span>}
      {coordinates.e && <span>{coordinates.e} E°</span>}
      {coordinates.w && <span>{coordinates.w} W°</span>}
    </div>);
  }
  render() {
    const { weatherList, error, loading } = this.props.weatherStore!;
    return (
      <div>
        <h1>Weather Journal</h1>
        { error && <div>Error in Server, try refreshing the page</div> }
        { loading && <div>Loading...</div> }
        { loading === false && weatherList.map((data, i) => {
          return (<div key={i} className="coordinates">
            {this.renderCoordinates(data.coordinates)}
            Wind Speed: {data.windSpeed}

          </div>) }) }
      </div>
    )
  }
}
