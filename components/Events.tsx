import React from 'react';
import {
  View, StyleProp, ViewStyle,
} from 'react-native';
import EventsList from './EventsList';
import DayEvent from './DayEvent';
import EventsAdderContainer from '../containers/EventsAdderContainer';
import EventsPie from './EventsPie';


type eventsProps = {
  onSubmit: (name: string, start: Date, end: Date) => boolean;
  onNamePress: (id: number) => void;
  events: DayEvent[];
  style?: StyleProp<ViewStyle>;
};

const Events = (props: eventsProps): JSX.Element => {
  const {
    style, events, onSubmit, onNamePress,
  } = props;

  return (
    <View style={style}>
      <EventsPie style={{ height: '40%' }} events={events} />
      <EventsList events={events} onNamePress={onNamePress} />
      <EventsAdderContainer style={{ height: '60%' }} onSubmit={onSubmit} />
    </View>
  );
};

export default Events;
