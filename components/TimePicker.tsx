import React from 'react';
import {
  View, Button, StyleProp, ViewStyle,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import toAMPM from '../utilClasses/toAMPM';
import Time from '../utilClasses/Time';

type commProps = {
  style: StyleProp<ViewStyle>;
  time: Time;
  onChange: (_, time: Date) => void;
  pickerVisible: boolean;
  showPicker: () => void;
}

const TimePicker = (props: commProps): JSX.Element => {
  const {
    pickerVisible, showPicker, time, onChange, style,
  } = props;

  return (
    <View style={style}>
      <Button title={toAMPM(time)} onPress={showPicker} />
      {
        pickerVisible
        && (
          <DateTimePicker
            value={time.toDate()}
            mode="time"
            onChange={onChange}
          />
        )
      }
    </View>
  );
};

export default TimePicker;
