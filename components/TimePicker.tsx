import React from 'react';
import {
  View, Button, StyleProp, ViewStyle,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function toAMPM(date: Date): string {
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes} ${ampm}`;
}

type commProps = {
  style: StyleProp<ViewStyle>;
  time: Date;
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
            value={time}
            mode="time"
            onChange={onChange}
          />
        )
      }
    </View>
  );
};

export default TimePicker;
