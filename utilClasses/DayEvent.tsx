import Time from './Time';

function randomColor(): string {
  // eslint-disable-next-line no-bitwise
  return (`#${(Math.random() * 0xFFFFFF << 0).toString(16)}000000`).slice(0, 7);
}

export default class DayEvent {
    public name: string;

    public start: Time;

    public end: Time;

    public color: string;

    public static ID = 0;

    public id: number;

    constructor(name: string, startTime: Time | string, endTime: Time | string, color?: string) {
      this.name = name;
      this.start = startTime instanceof Time ? startTime : new Time(new Date(startTime));
      this.end = endTime instanceof Time ? endTime : new Time(new Date(endTime));
      this.color = color || randomColor();

      this.id = DayEvent.ID;
      DayEvent.ID += 1;
    }
}
