import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, TextInput, Button, StyleProp, ViewStyle,
} from 'react-native';
import TimePicker from 'react-time-picker';

const styles = StyleSheet.create({
  formView: {
    position: 'absolute',
    left: 10,
    right: 10,
    margin: 'auto',
    backgroundColor: 'rgba(222, 222, 222, 0.9)',
    borderWidth: 0,
    borderRadius: 5,
  },
  formText: {
    flex: 1,
    flexBasis: '50%',
    color: 'black',
    textAlign: 'right',
    fontSize: 20,
  },
  formInput: {
    flex: 1,
    flexBasis: '50%',
    minWidth: 0,
  },
  formFieldRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  floatingButton: {
    position: 'absolute',
    backgroundColor: 'grey',
    borderColor: 'grey',
    borderRadius: 25,
    borderWidth: 1,
    width: 50,
    height: 50,
    right: 10,
    bottom: 10,
  },
});

type eventsAdderProps = {
  style: StyleProp<ViewStyle>;
  formVisible?: boolean;
  formToggle: (value: boolean) => void;
  name: string;
  onNameChange: (name: string) => void;
  start: string;
  onStartChange: (start: string) => void;
  end: string;
  onEndChange: (end: string) => void;
};

const EventsAdder = (props: eventsAdderProps): JSX.Element => {
  const {
    floatingButton, formView, formText, formFieldRow, formInput,
  } = styles;
  const {
    formVisible, formToggle, style, name, onNameChange, start, onStartChange, end, onEndChange,
  } = props;

  return (
    <View style={style}>
      <View style={[formView, { display: (formVisible ? 'flex' as 'flex' : 'none' as 'none') }]}>
        <Text style={[formText, { fontWeight: 'bold', fontSize: 40, textAlign: 'center' }]}>Add Event</Text>
        <View style={formFieldRow}>
          <Text style={formText}>Event Name: </Text>
          <TextInput style={[formInput, { fontSize: 20 }]} placeholder="Name" onChangeText={onNameChange} value={name} />
        </View>
        <View style={formFieldRow}>
          <Text style={formText}>Event Start Time: </Text>
          <View style={formInput}>
            <TimePicker disableClock onChange={onStartChange} value={start} />
          </View>
        </View>
        <View style={formFieldRow}>
          <Text style={formText}>Event End Time: </Text>
          <View style={formInput}>
            <TimePicker disableClock onChange={onEndChange} value={end} />
          </View>
        </View>
        <Button title="Add Event" onPress={(): void => formToggle(false)} />
      </View>
      <TouchableOpacity style={floatingButton} onPress={(): void => formToggle(true)}>
        <Text style={{ textAlign: 'center', fontSize: 50, marginTop: -15 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventsAdder;
