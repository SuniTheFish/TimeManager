import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Text } from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts';
import DayEvent from './DayEvent';

type eventsPieProps = {
  style?: StyleProp<ViewStyle>;
  events: DayEvent[];
}

const EventsPie = ({ style, events }: eventsPieProps): JSX.Element => {
  const dayEnd = new Date();
  dayEnd.setHours(23, 59, 59, 999);
  const dayStart = new Date();
  dayStart.setHours(0, 0, 0, 0);

  const pieData = events.map((event) => ({
    value: event.end.getTime() - event.start.getTime(),
    start: event.start.getTime(),
    name: event.name,
    svg: {
      fill: '#09ab00',
    },
    key: `event_pie_${event.id}`,
  }));

  const unusedEventColor = '#cccccc';
  for (let i = 0; i < events.length - 1; i += 1) {
    const [cur, next] = [events[i].end.getTime(), events[i + 1].start.getTime()];
    if (cur < next) {
      pieData.splice(i, 0, {
        value: next - cur,
        start: cur,
        name: 'none',
        svg: {
          fill: unusedEventColor,
        },
        key: `pie_filler_${i}`,
      });
    }
  }

  if (events.length > 0) {
    const [first, last] = [events[0].start.getTime(), events[events.length - 1].end.getTime()];
    if (first > dayStart.getTime()) {
      pieData.unshift({
        value: first - dayStart.getTime(),
        start: dayStart.getTime(),
        name: 'none',
        svg: {
          fill: unusedEventColor,
        },
        key: 'event_pie_start',
      });
    }
    if (last < dayEnd.getTime()) {
      pieData.push({
        value: dayEnd.getTime() - last,
        start: last,
        name: 'none',
        svg: {
          fill: unusedEventColor,
        },
        key: 'event_pie_end',
      });
    }
  } else {
    const oneDay = 8.64e7;
    pieData.push({
      value: oneDay,
      start: dayStart.getTime(),
      name: 'none',
      svg: {
        fill: unusedEventColor,
      },
      key: 'filler_full',
    });
  }


  // add name labels
  const Labels = ({ slices }): JSX.Element => slices.map((slice): JSX.Element => {
    const { pieCentroid, data } = slice;
    return (
      <Text
        key={data.key}
        x={pieCentroid[0]}
        y={pieCentroid[1]}
        fill="black"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize={20}
      >
        {data.name}
      </Text>
    );
  });

  return (
    <PieChart
      style={style}
      data={pieData}
      padAngle={0.025}
      sort={(a, b): number => a.start - b.start}
    >
      <Labels slices />
    </PieChart>
  );
};

export default EventsPie;
