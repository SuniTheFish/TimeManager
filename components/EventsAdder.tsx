import React from 'react';
import {
  Button, View, TextInput, Text, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
  },
  input: {
    flex: 1,
  },
  border: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#a8a8a8',
  },
});

export default class EventsAdder extends
  React.Component<
    {onPress: (name: string, start: number, end: number) => void},
    {name: string; start: number; end: number}
  > {
  constructor(props) {
    super(props);

    this.state = { name: '', start: null, end: null };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleNameChange(name: string): void {
    this.setState({ name });
  }

  handleStartChange(start: string): void {
    this.setState({ start: parseInt(start, 10) });
  }

  handleEndChange(end: string): void {
    this.setState({ end: parseInt(end, 10) });
  }

  handleClick(): void {
    const { onPress } = this.props;
    const { name, start, end } = this.state;
    if (name !== '' && start && end) {
      onPress(name, start, end);
    }
  }

  render(): JSX.Element {
    const { name, start, end } = this.state;

    return (
      <View style={{ flexDirection: 'row', alignContent: 'center' }}>
        <Text style={styles.text}>Event Name:</Text>
        <TextInput style={[styles.input, styles.border]} placeholder="Name" onChangeText={this.handleNameChange} value={name} />
        <Text style={styles.text}>Start Time:</Text>
        <TextInput style={[styles.input, styles.border]} placeholder="Start" onChangeText={this.handleStartChange} value={`${start}`} keyboardType="numeric" />
        <Text style={styles.text}>End Time:</Text>
        <TextInput style={[styles.input, styles.border]} placeholder="End" onChangeText={this.handleEndChange} value={`${end}`} keyboardType="numeric" />
        <Button title="Add Event" onPress={this.handleClick} />
      </View>
    );
  }
}
