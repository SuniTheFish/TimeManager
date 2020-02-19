import React from 'react';
import { View } from 'react-native';
import EventsContainer from './containers/EventsContainer';

const HelloWorldApp = (): JSX.Element => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <EventsContainer style={{ width: '80%', height: '100%' }} />
  </View>
);

export default HelloWorldApp;
