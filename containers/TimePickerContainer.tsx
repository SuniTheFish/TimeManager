import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import TimePicker from '../components/TimePicker';

type pickerProps = {
  style?: StyleProp<ViewStyle>;
  onChange: (time: Date) => void;
}

type stateVars = {
  pickerVisible: boolean;
  time: Date;
}

export default class TimePickerContainer extends React.Component<pickerProps, stateVars> {
  constructor(props) {
    super(props);

    this.state = { pickerVisible: false, time: new Date() };
    this.showPicker = this.showPicker.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(_, time: Date): void {
    const { onChange } = this.props;
    onChange(time);
  }

  showPicker(): void {
    this.setState({ pickerVisible: true });
  }

  render(): JSX.Element {
    const { pickerVisible, time } = this.state;
    const { style } = this.props;

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
