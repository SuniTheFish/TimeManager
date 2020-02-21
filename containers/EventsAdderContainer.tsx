import React from 'react';
import { StyleProp, ViewStyle, Alert } from 'react-native';
import EventsAdder from '../components/EventsAdder';

export default class EventsAdderContainer extends
  React.Component<
    {
      style?: StyleProp<ViewStyle>;
      onSubmit: (name: string, start: Date, end: Date) => boolean;
    },
    // {onPress: (name: string, start: number, end: number) => void},
    {
      formVisibility: boolean;
      name: string;
      start: Date;
      end: Date;
    }
  > {
  constructor(props) {
    super(props);

    const endDate = new Date();
    endDate.setHours(endDate.getHours() + 1);
    this.state = {
      formVisibility: false,
      name: '',
      start: new Date(),
      end: endDate,
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
    if (start > end) {
      Alert.alert('Invalid Times', 'Events can\'t end before they start.', [{ text: 'OK' }]);
      return;
    }
    if (!onSubmit(name || 'Unnamed Event', start, end)) {
      Alert.alert('Event Conflict', 'Conflicting Events Are Not Allowed.', [{ text: 'OK' }]);
      return;
    }
    this.toggleFormVisibility(false);
    const endDate = new Date();
    endDate.setHours(endDate.getHours() + 1);
    this.setState({ name: '', start: new Date(), end: endDate });
  }

  toggleFormVisibility(value: boolean): void {
    this.setState({ formVisibility: value });
  }

  render(): JSX.Element {
    const {
      formVisibility, name, start, end,
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
        end={end}
        onEndChange={this.handleEndChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
