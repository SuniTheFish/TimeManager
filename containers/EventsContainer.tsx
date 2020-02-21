import React from 'react';
import {
  StyleProp, ViewStyle, Alert, AsyncStorage,
} from 'react-native';
import DayEvent from '../components/DayEvent';
import Events from '../components/Events';

/**
 * Test if a single event conflicts with any other events in the events param
 * @param tstEvent the event to test for conflicts with
 * @param events the events to test if the prev. param conflicts with
 */
function eventsConflict(tstEvent: DayEvent, events: DayEvent[]): boolean {
  const { start, end } = tstEvent;
  let conflict = false;
  events.forEach((event) => {
    // this tests for conflicts regardless of if the events are sorted or not
    if (
      (start.getTime() > event.start.getTime() ? start : event.start).getTime()
      <= (end.getTime() < event.end.getTime() ? end : event.end).getTime()
    ) {
      conflict = true;
    }
  });
  return conflict;
}

export default class EventsContainer extends React.Component<
  {style: StyleProp<ViewStyle>},
  {events: DayEvent[]}
> {
  constructor(props) {
    super(props);

    this.state = { events: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNamePress = this.onNamePress.bind(this);
    this.storeEvents = this.storeEvents.bind(this);
    this.loadEvents = this.loadEvents.bind(this);
    this.loadEvents();
  }

  // async componentDidMount(): Promise<void> {
  // }

  componentDidUpdate(): void {
    this.storeEvents();
  }

  /**
   * delete event after confirmation on long press of event title
   * @param id id of the event to delete
   */
  onNamePress(id: number): void {
    const { events } = this.state;
    const delI = events.findIndex((event) => event.id === id);
    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to delete event: "${events[delI].name}?`,
      [
        { text: 'Cancel' },
        {
          text: 'OK',
          onPress: (): void => {
            events.splice(delI, 1);
            this.setState({ events });
          },
        },
      ],
    );
  }

  async storeEvents(): Promise<void> {
    try {
      const { events } = this.state;
      const rawEvents = events.map(({
        name, start, end, color,
      }) => [
        name, start, end, color,
      ]);
      await AsyncStorage.setItem('@events', JSON.stringify(rawEvents));
    } catch (_) {
      // ignore save failure
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async loadEvents(): Promise<void> {
    try {
      const value = await AsyncStorage.getItem('@events');
      if (value !== null) {
        const rawData = JSON.parse(value);
        const parsedData = rawData.map((val) => new DayEvent(val[0], val[1], val[2], val[3]));
        this.setState({ events: parsedData });
      }
    } catch (_) {
      // ignore file load error (might change in future... but for now...)
    }
  }

  /**
   * if event doesn't conflict returns true and sets state, else returns false
   * @param name the name of the event
   * @param start the start time of the event
   * @param end the end time of the event
   */
  handleSubmit(name: string, start: Date, end: Date): boolean {
    const eventToAdd = new DayEvent(name, start, end);
    const { events } = this.state;
    if (eventsConflict(eventToAdd, events)) return false;
    events.push(eventToAdd);
    // sort events by start time
    events.sort((a, b) => a.start.getTime() - b.start.getTime());
    this.setState({ events });
    return true;
  }

  render(): JSX.Element {
    const { events } = this.state;
    const { style } = this.props;

    return (
      <Events
        style={style}
        onSubmit={this.handleSubmit}
        events={events}
        onNamePress={this.onNamePress}
      />
    );
  }
}
