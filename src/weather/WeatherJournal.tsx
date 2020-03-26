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

  changePage = (page:number) => {
    const { changePage } = this.props.weatherStore!;
    changePage(page);
  }

  render() {
    const { weatherJournal, errorJournal, loadingJournal, journalPage, journalPages } = this.props.weatherStore!;
    const pages = Math.ceil(journalPages/10);
    return (
      <div>
        <h1>Weather Observations</h1>
        { errorJournal && <div>Error in Server, try refreshing the page</div> }
        { loadingJournal && <div>Loading...</div> }

        { !loadingJournal && <div>
          <button 
            className={journalPage === 1 ? "disabled" : ""}
            disabled={journalPage === 1}
            onClick={() => this.changePage(journalPage - 1)} >
            Back
          </button>
          {journalPage} of {pages}
          <button
            className={journalPage === pages ? "disabled" : ""}
            disabled={journalPage === pages}
            onClick={() => this.changePage(journalPage + 1)}>
            Next
          </button>
        </div> }

        { loadingJournal === false && weatherJournal.map((data, i) =>
          <WeatherCard key={i} weather={data} disabled={true}/>) }
          
      </div>
    )
  }
}
