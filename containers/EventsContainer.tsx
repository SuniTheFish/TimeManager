import React from 'react';
import {
  StyleProp, ViewStyle,
} from 'react-native';
import DayEvent from '../components/DayEvent';
import Events from '../components/Events';

export default class EventsContainer extends React.Component<
  {style: StyleProp<ViewStyle>},
  {events: DayEvent[]}
> {
  constructor(props) {
    super(props);

    this.state = { events: [new DayEvent('Test Event', 1.5, 3.5)] };
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(name: string, start: number, end: number): void {
    const { events } = this.state;
    events.push(new DayEvent(name, start, end));
    this.setState({ events });
  }

  render(): JSX.Element {
    const { events } = this.state;
    const { style } = this.props;

    return (
      <Events style={style} onPress={this.handlePress} events={events} />
    );
  }
}
