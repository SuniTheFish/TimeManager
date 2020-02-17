export default class DayEvent {
    public name: string;

    public startTime: number;

    public endTime: number;

    public static ID = 0;

    public id: number;

    constructor(name: string, startTime: number, endTime: number) {
      this.name = name;
      this.startTime = startTime;
      this.endTime = endTime;

      this.id = DayEvent.ID;
      DayEvent.ID += 1;
    }
}
