import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'mobx-react'
import { WeatherStore } from './weather/store/weather'
import { Weather } from './weather/Weather';
class App extends React.Component<{}> {
  private weatherStore: WeatherStore = new WeatherStore()
  render(){
    return (
      <Provider weatherStore={this.weatherStore}>
        <div className="App">
          <Weather />
        </div>
      </Provider>
    );
  }
}


export default App;
