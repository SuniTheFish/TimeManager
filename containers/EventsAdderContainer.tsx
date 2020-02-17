import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import EventsAdder from '../components/EventsAdder';

export default class EventsAdderContainer extends
  React.Component<
    {style?: StyleProp<ViewStyle>},
    // {onPress: (name: string, start: number, end: number) => void},
    {
      formVisibility: boolean;
      name: string;
      start: string;
      end: string;
    }
  > {
  constructor(props) {
    super(props);

    this.state = {
      formVisibility: true,
      name: '',
      start: '',
      end: '',
    };
    this.toggleFormVisibility = this.toggleFormVisibility.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleNameChange(name: string): void {
    this.setState({ name });
  }

  handleStartChange(start: string): void {
    this.setState({ start });
  }

  handleEndChange(end: string): void {
    this.setState({ end });
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
      />
    );
  }
}
