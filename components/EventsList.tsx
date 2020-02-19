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
  headerBorder: {
    borderWidth: 1,
    borderColor: '#b5b5b5',
    borderTopWidth: 0,
  },
  border: {
    borderWidth: 1,
    borderColor: '#b5b5b5',
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

const localeOptions = {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'UTC',
};

const EventsList = ({ events }: { events: DayEvent[] }): JSX.Element => {
  const {
    title, time, border, list, headerBorder,
  } = styles;

  const eventsRow = [[
    <Text style={[title, headerBorder, { borderLeftWidth: 0 }]} key="event_title_name">Name</Text>,
    <Text style={[time, headerBorder]} key="event_title_start">Start</Text>,
    <Text style={[time, headerBorder, { borderRightWidth: 0 }]} key="event_title_end">End</Text>,
  ]];

  eventsRow.push(...events.map((event) => {
    const { name, start, end } = event;

    return [
      <Text style={[title, border]} key={`event_${event.id}_name`}>{name}</Text>,
      <Text style={[time, border]} key={`event_${event.id}_start`}>{start.toLocaleTimeString('en-US', localeOptions)}</Text>,
      <Text style={[time, border]} key={`event_${event.id}_end`}>{end.toLocaleTimeString('en-US', localeOptions)}</Text>,
    ];
  }));

  return <View style={list}>{eventsRow}</View>;
};

EventsList.propTypes = {
  events: PropTypes.arrayOf<DayEvent>(PropTypes.instanceOf(DayEvent)).isRequired,
};

export default EventsList;
