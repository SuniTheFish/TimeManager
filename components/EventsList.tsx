import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View } from 'react-native';
import DayEvent from './DayEvent';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
  },
  // row: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  //   alignItems: 'flex-start',
  // },
  border: {
    borderWidth: 1,
    borderColor: '#b5b5b5',
    borderRadius: 3,
  },
  title: {
    flexBasis: '33.3333%',
    flexGrow: 0,
    flexShrink: 0,
    fontSize: 30,
  },
  time: {
    flexBasis: '33.3333%',
    flexGrow: 0,
    flexShrink: 0,
    fontSize: 30,
  },
});

const EventsList = ({ events }: { events: DayEvent[] }): JSX.Element => {
  const {
    title, time, border, list,
  } = styles;

  const eventsRow = [[
    <Text style={[title, border]} key="event_title_name">Name</Text>,
    <Text style={[time, border]} key="event_title_start">Start</Text>,
    <Text style={[time, border]} key="event_title_end">End</Text>,
  ]];

  eventsRow.push(...events.map((event) => {
    const { name, startTime, endTime } = event;

    const startHour = Math.floor(startTime);
    const startMinutes = (startTime - startHour) * 60;

    const endHour = Math.floor(endTime);
    const endMinutes = (endTime - endHour) * 60;

    return [
      <Text style={[title, border]} key={`event_${event.id}_name`}>{name}</Text>,
      <Text style={[time, border]} key={`event_${event.id}_start`}>{`${startHour}:${startMinutes}`}</Text>,
      <Text style={[time, border]} key={`event_${event.id}_end`}>{`${endHour}:${endMinutes}`}</Text>,
    ];
  }));

  return <View style={list}>{eventsRow}</View>;
};

EventsList.propTypes = {
  events: PropTypes.arrayOf<DayEvent>(PropTypes.instanceOf(DayEvent)).isRequired,
};

export default EventsList;
