import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import TimePicker from '../components/TimePicker';

type pickerProps = {
  style?: StyleProp<ViewStyle>;
  onChange: (time: Date) => void;
  time: Date;
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
      onChange(time);
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
