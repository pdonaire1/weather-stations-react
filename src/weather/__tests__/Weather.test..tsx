import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Weather } from '../Weather';
import { WeatherCard } from '../WeatherCard';

configure({ adapter: new Adapter() });

describe("Weather Component", () => {
  let weatherStore: any;
  beforeEach(() =>{
    weatherStore = {
      weatherList: [],
      error: false,
      loading: false,
      journalPage: false,
      journalPages: false,
      weatherJournal: [],
      errorJournal: false,
      loadingJournal: false,
      requestWeatherList: () => {}
    }
  })
  it('should renders without crashing', () => {
    shallow(<Weather weatherStore={weatherStore} />);
  });
  
  // it('should renders top message', function() {
  //   const wrapper = shallow(<Weather weatherStore={weatherStore} />);
  //   expect(this.requestWeatherList).toBe(true)
  // });
  
  it('should not show cards for empty Weather', () => {
    const wrapper = shallow(<Weather weatherStore={weatherStore} />);
    // @ts-ignore: Unreachable code error
    expect(wrapper.contains(<WeatherCard />)).toEqual(false);
  });

});