import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, StyleSheet, View, TouchableOpacity,
} from 'react-native';
import DayEvent from './DayEvent';
import toAMPM from '../containers/toAMPM';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
  },
  headerBorder: {
    borderWidth: 1,
    borderColor: '#b5b5b5',
    borderTopWidth: 0,
  },
  border: {
    borderWidth: 1,
    borderColor: '#b5b5b5',
  },
  colHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    flexBasis: '45%',
    flexGrow: 0,
    flexShrink: 0,
    fontSize: 19,
  },
  eventData: {
    flexBasis: '25%',
    flexGrow: 0,
    flexShrink: 0,
    fontSize: 19,
  },
  trash: {
    flexBasis: '5%',
    fontSize: 19,
    textAlign: 'center',
  },
  trashIcon: {
    fontSize: 19,
    color: 'white',
    backgroundColor: 'red',
    textAlign: 'center',
  },
});

type eventsProps = {
  events: DayEvent[];
  onNamePress: (id: number) => void;
}

const EventsList = ({ events, onNamePress }: eventsProps): JSX.Element => {
  const {
    title, eventData: time, border, list, headerBorder, colHeader, trash, trashIcon,
  } = styles;

  const eventsRows = [];

  eventsRows.push(...events.map((event) => {
    const { name, start, end } = event;

    return [
      <Text style={[title, border]} key={`event_${event.id}_name`}>{name}</Text>,
      <Text style={[time, border]} key={`event_${event.id}_start`}>{toAMPM(start)}</Text>,
      <Text style={[time, border]} key={`event_${event.id}_end`}>{toAMPM(end)}</Text>,
      (
        <TouchableOpacity style={[trash, border]} onPress={(): void => onNamePress(event.id)} key={`event_${event.id}_delete`}>
          <Text style={trashIcon}>X</Text>
        </TouchableOpacity>
      ),
    ];
  }));

  return (
    <View style={list}>
      <Text style={[title, headerBorder, colHeader, { fontSize: 30, flexBasis: '100%' }]}>Events</Text>
      <Text style={[title, headerBorder, colHeader]}>Name</Text>
      <Text style={[time, headerBorder, colHeader]}>Start</Text>
      <Text style={[time, headerBorder, colHeader]}>End</Text>
      <Text style={[trash, headerBorder]} />
      {eventsRows}
    </View>
  );
};

EventsList.propTypes = {
  events: PropTypes.arrayOf<DayEvent>(PropTypes.instanceOf(DayEvent)).isRequired,
};

export default EventsList;
