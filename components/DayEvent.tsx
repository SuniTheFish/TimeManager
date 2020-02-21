function randomColor(): string {
  // eslint-disable-next-line no-bitwise
  return (`#${(Math.random() * 0xFFFFFF << 0).toString(16)}000000`).slice(0, 7);
}

export default class DayEvent {
    public name: string;

    public start: Date;

    public end: Date;

    public color: string;

    public static ID = 0;

    public id: number;

    constructor(name: string, startTime: Date | string, endTime: Date | string, color?: string) {
      this.name = name;
      this.start = startTime instanceof Date ? startTime : new Date(startTime);
      this.end = endTime instanceof Date ? endTime : new Date(endTime);
      this.color = color || randomColor();

      this.id = DayEvent.ID;
      DayEvent.ID += 1;
    }
}
