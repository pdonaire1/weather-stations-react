import * as React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react'
import { WeatherStore, IWeather } from './store/weather'

interface IWeatherListProps {
  weatherStore?: WeatherStore
  weather: IWeather,
}

@inject('weatherStore')
@observer
export class WeatherComments extends React.Component<IWeatherListProps> {

  render() {
    const { weather } = this.props;
    return (
      <div>
        { weather.comments && weather.comments!.map((comment, index) => <div key={index} className="comment-box">
          <div>
            {comment.comment}
            <div>Date: {comment.time && comment.time.split("T")[0]}</div>
          </div>
        </div>)}
      </div>
    )
  }
}
