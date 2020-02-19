import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import EventsAdder from '../components/EventsAdder';

export default class EventsAdderContainer extends
  React.Component<
    {
      style?: StyleProp<ViewStyle>;
      onSubmit: (name: string, start: Date, end: Date) => void;
    },
    // {onPress: (name: string, start: number, end: number) => void},
    {
      formVisibility: boolean;
      startPickerVisible: boolean;
      endPickerVisible: boolean;
      name: string;
      start: Date;
      end: Date;
    }
  > {
  constructor(props) {
    super(props);

    this.state = {
      formVisibility: true,
      name: '',
      startPickerVisible: false,
      endPickerVisible: false,
      start: new Date(),
      end: new Date(),
    };
    this.toggleFormVisibility = this.toggleFormVisibility.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(name: string): void {
    this.setState({ name });
  }

  handleStartChange(start: Date): void {
    this.setState({ start });
  }

  handleEndChange(end: Date): void {
    this.setState({ end });
  }

  handleSubmit(): void {
    const { onSubmit } = this.props;
    const { name, start, end } = this.state;
    onSubmit(name, start, end);
    this.toggleFormVisibility(false);
    this.setState({ name: '', start: new Date(), end: new Date() });
  }

  toggleFormVisibility(value: boolean): void {
    this.setState({ formVisibility: value });
  }

  render(): JSX.Element {
    const {
      formVisibility, name, start, startPickerVisible, end, endPickerVisible,
    } = this.state;
    const { style } = this.props;

    return (
      <EventsAdder
        style={style}
        formVisible={formVisibility}
        formToggle={this.toggleFormVisibility}
        name={name}
        onNameChange={this.handleNameChange}
        start={start}
        onStartChange={this.handleStartChange}
        showStartPicker={this.showStartPicker}
        startPickerVisible={startPickerVisible}
        end={end}
        onEndChange={this.handleEndChange}
        onSubmit={this.handleSubmit}
        endPickerVisible={endPickerVisible}
      />
    );
  }
}
