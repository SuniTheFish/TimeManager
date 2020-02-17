import React from 'react';
import {
  View, StyleProp, ViewStyle,
} from 'react-native';
import EventsList from './EventsList';
import DayEvent from './DayEvent';
import EventsAdderContainer from '../containers/EventsAdderContainer';


type eventsProps = {
  onPress: (name: string, start: number, end: number) => void;
  events: DayEvent[];
  style?: StyleProp<ViewStyle>;
};

const Events = (props: eventsProps): JSX.Element => {
  const { style } = props;

  return (
    <View style={style}>
      {/* <EventsList events={events} /> */}
      <EventsList events={[]} />
      <EventsAdderContainer style={{ height: '100%' }} />
    </View>
  );
};

export default Events;
