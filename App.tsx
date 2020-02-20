import React from 'react';
import { View, StatusBar } from 'react-native';
import EventsContainer from './containers/EventsContainer';

const HelloWorldApp = (): JSX.Element => (
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <StatusBar hidden />
    <EventsContainer style={{ width: '100%', height: '100%' }} />
  </View>
);

export default HelloWorldApp;
