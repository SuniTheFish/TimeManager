import React from 'react';
import {
  StyleProp, ViewStyle,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import DayEvent from '../components/DayEvent';
import Events from '../components/Events';

export default class EventsContainer extends React.Component<
  {style: StyleProp<ViewStyle>},
  {events: DayEvent[]}
> {
  constructor(props) {
    super(props);

    this.state = { events: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(name: string, start: Date, end: Date): void {
    const { events } = this.state;
    events.push(new DayEvent(name, start, end));
    this.setState({ events });
  }

  render(): JSX.Element {
    const { events } = this.state;
    const { style } = this.props;

    return (
      <Events style={style} onSubmit={this.handleSubmit} events={events} />
    );
  }
}
