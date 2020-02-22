import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import TimePicker from '../components/TimePicker';
import Time from '../utilClasses/Time';

type pickerProps = {
  style?: StyleProp<ViewStyle>;
  onChange: (time: Time) => void;
  time: Time;
}

type stateVars = {
  pickerVisible: boolean;
}

export default class TimePickerContainer extends React.Component<pickerProps, stateVars> {
  constructor(props) {
    super(props);

    this.state = { pickerVisible: false };
    this.showPicker = this.showPicker.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(_, time: Date): void {
    if (time) {
      const { onChange } = this.props;
      this.setState({ pickerVisible: false });
      const classTime = new Time(time);
      onChange(classTime);
    }
  }

  showPicker(): void {
    this.setState({ pickerVisible: true });
  }

  render(): JSX.Element {
    const { pickerVisible } = this.state;
    const { style, time } = this.props;

    return (
      <TimePicker
        style={style}
        pickerVisible={pickerVisible}
        showPicker={this.showPicker}
        time={time}
        onChange={this.handleChange}
      />
    );
  }
}
