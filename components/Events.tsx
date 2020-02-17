import React from 'react';
import {
  View, StyleProp, ViewStyle,
} from 'react-native';
import EventsList from './EventsList';
import DayEvent from './DayEvent';
import EventsAdder from './EventsAdder';


type eventsProps = {
  onPress: (name: string, start: number, end: number) => void;
  events: DayEvent[];
  style?: StyleProp<ViewStyle>;
};

const Events = (props: eventsProps): JSX.Element => {
  const { onPress, events, style } = props;

  return (
    <View style={style}>
      <EventsList events={events} />
      <EventsAdder onPress={onPress} />
      {/* <TouchableOpacity style={{ position: 'absolute', right: 10, bottom: 10 }} onPress={}>
        <Text>Touch Here</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Events;
