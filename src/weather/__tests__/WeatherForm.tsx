import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WeatherForm } from '../WeatherForm';
import { expect } from 'chai';
configure({ adapter: new Adapter() });

describe("Weather Component", () => {
  let weatherStore: any;
  let weather: any;
  beforeEach(() =>{
    weather = {
        comments: [],
        time: ""
    }
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
    const component = shallow(<WeatherForm id={"1"} weatherStore={weatherStore} />);
    expect(component.contains(<textarea/>)).to.be.false;
  });
  

});