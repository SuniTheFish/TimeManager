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
    flexBasis: '60%',
    flexGrow: 0,
    flexShrink: 0,
    fontSize: 30,
  },
  time: {
    flexBasis: '20%',
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
    <Text style={[title, border]}>Name</Text>,
    <Text style={[time, border]}>Start Time</Text>,
    <Text style={[time, border]}>End Time</Text>,
  ]];

  eventsRow.push(...events.map((event) => {
    const { name, startTime, endTime } = event;

    const startHour = Math.floor(startTime);
    const startMinutes = (startTime - startHour) * 60;

    const endHour = Math.floor(endTime);
    const endMinutes = (endTime - endHour) * 60;

    return [
      <Text style={[title, border]}>{name}</Text>,
      <Text style={[time, border]}>{`${startHour}:${startMinutes}`}</Text>,
      <Text style={[time, border]}>{`${endHour}:${endMinutes}`}</Text>,
    ];
  }));

  return <View style={list}>{eventsRow}</View>;
};

EventsList.propTypes = {
  events: PropTypes.arrayOf<DayEvent>(PropTypes.instanceOf(DayEvent)).isRequired,
};

export default EventsList;
