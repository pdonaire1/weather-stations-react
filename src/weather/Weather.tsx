import * as React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { WeatherStore } from './store/weather';
import { WeatherForm } from './WeatherForm';
import { WeatherComments } from './WeatherComments';
import { WeatherCard } from './WeatherCard';
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

  render() {
    const { weatherList, error, loading } = this.props.weatherStore!;
    return (
      <div>
        <h1>Real Time Weather</h1>
        { error && <div>Error in Server, try refreshing the page</div> }
        { loading && <div>Loading...</div> }

        { loading === false && weatherList.map((data, i) =>
          <WeatherCard key={i} weather={data} />) }
          
      </div>
    )
  }
}
