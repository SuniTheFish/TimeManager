export default class DayEvent {
    public name: string;

    public start: Date;

    public end: Date;

    public static ID = 0;

    public id: number;

    constructor(name: string, startTime: Date, endTime: Date) {
      this.name = name;
      this.start = startTime;
      this.end = endTime;

      this.id = DayEvent.ID;
      DayEvent.ID += 1;
    }
}
