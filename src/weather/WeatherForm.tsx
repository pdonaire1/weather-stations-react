import * as React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react'
import { WeatherStore } from './store/weather'
// import { super } from '@babel/types';

interface IWeatherListProps {
  weatherStore?: WeatherStore
  id: string
}
interface IWeatherListState {
  comment: string;
}

@inject('weatherStore')
@observer
export class WeatherForm extends React.Component<IWeatherListProps, IWeatherListState> {
  constructor(props: IWeatherListProps) {
    super(props);
    this.state = { comment: "" }
  }
  onCreateObservation = async () => {
    const { createObservation } = this.props.weatherStore!;
    await createObservation(this.props.id, this.state.comment);
    this.setState({ comment: "" });
  }
  onHandleChange = (comment: string) => {
    this.setState({ comment });
  }
  render() {
    return (
      <div>
        <div className="sub-title">Comments:</div>
        <textarea className="comments" value={this.state.comment} onChange={(
          ev: React.ChangeEvent<HTMLTextAreaElement>): void => this.onHandleChange(ev.target.value)}></textarea>
        <button onClick={this.onCreateObservation}>Add Comment</button>
      </div>
    )
  }
}
