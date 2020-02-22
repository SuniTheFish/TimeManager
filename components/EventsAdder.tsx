import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, TextInput, Button, StyleProp, ViewStyle,
} from 'react-native';
import TimePickerContainer from '../containers/TimePickerContainer';
import Time from '../utilClasses/Time';

const styles = StyleSheet.create({
  formView: {
    position: 'absolute',
    left: 10,
    right: 10,
    margin: 'auto',
    backgroundColor: 'rgba(222, 222, 222, 1.0)',
    borderWidth: 0,
    borderRadius: 1,
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
  start: Time;
  onStartChange: (start: Time) => void;
  end: Time;
  onEndChange: (end: Time) => void;
  onSubmit: () => void;
};

const EventsAdder = (props: eventsAdderProps): JSX.Element => {
  const {
    floatingButton, formView, formText, formFieldRow, formInput,
  } = styles;
  const {
    formVisible,
    formToggle,
    style,
    name,
    onNameChange,
    start,
    onStartChange,
    end,
    onEndChange,
    onSubmit,
  } = props;

  return (
    <View style={style}>
      { formVisible && (
      <View style={formView}>
        <Text style={[formText, { fontWeight: 'bold', fontSize: 40, textAlign: 'center' }]}>Add Event</Text>
        <View style={formFieldRow}>
          <Text style={formText}>Name:</Text>
          <TextInput style={[formInput, { fontSize: 20, borderWidth: 1, borderRadius: 2 }]} placeholder="Name" onChangeText={onNameChange} value={name} />
        </View>
        <View style={formFieldRow}>
          <Text style={formText}>Start Time:</Text>
          <TimePickerContainer style={formInput} onChange={onStartChange} time={start} />
        </View>
        <View style={formFieldRow}>
          <Text style={formText}>End Time:</Text>
          <TimePickerContainer style={formInput} onChange={onEndChange} time={end} />
        </View>
        <Button title="Add Event" onPress={onSubmit} />
      </View>
      )}
      <TouchableOpacity style={floatingButton} onPress={(): void => formToggle(!formVisible)}>
        <Text style={{ textAlign: 'center', fontSize: 50, marginTop: -12.5 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventsAdder;
