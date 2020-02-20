import React from 'react';
import {
  View, StyleProp, ViewStyle,
} from 'react-native';
import EventsList from './EventsList';
import DayEvent from './DayEvent';
import EventsAdderContainer from '../containers/EventsAdderContainer';


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
      <EventsList events={events} onNamePress={onNamePress} />
      <EventsAdderContainer style={{ height: '100%' }} onSubmit={onSubmit} />
    </View>
  );
};

export default Events;
