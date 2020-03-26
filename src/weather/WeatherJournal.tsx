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
export class WeatherJournal extends React.Component<WeatherListProps> {
  componentDidMount = () => {
    const { requestWeatherJournal } = this.props.weatherStore!;
    requestWeatherJournal();
  }

  render() {
    const { weatherJournal, errorJournal, loadingJournal } = this.props.weatherStore!;
    return (
      <div>
        <h1>Weather Observations</h1>
        { errorJournal && <div>Error in Server, try refreshing the page</div> }
        { loadingJournal && <div>Loading...</div> }

        { loadingJournal === false && weatherJournal.map((data, i) =>
          <WeatherCard key={i} weather={data} disabled={true}/>) }
          
      </div>
    )
  }
}
