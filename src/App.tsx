import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'mobx-react'
import { WeatherStore } from './weather/store/weather'
import { Weather } from './weather/Weather';
import { WeatherJournal } from './weather/WeatherJournal';
class App extends React.Component<{}> {
  private weatherStore: WeatherStore = new WeatherStore()
  render(){
    return (
      <Provider weatherStore={this.weatherStore}>
        <div className="App">
          <h1>Weather Journal</h1>
          <div className="wrapper">
            <div className="column">
              <Weather />
            </div>
            <div className="column">
              <WeatherJournal />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}


export default App;
