import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Weather } from './weather/Weather';
import { WeatherJournal } from './weather/WeatherJournal';

configure({ adapter: new Adapter() });

describe("App", () => {
  it('should renders without crashing', () => {
    shallow(<App />);
  });
  
  it('should renders top message', () => {
    const wrapper = shallow(<App />);
    const message = <h1>Weather Journal</h1>;
    expect(wrapper.contains(message)).toEqual(true);
  });
  
  it('should renders Weather App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Weather />)).toEqual(true);
  });
  
  it('should renders WeatherJournal', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<WeatherJournal />)).toEqual(true);
  });
});