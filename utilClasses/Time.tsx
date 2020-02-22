/**
 * Basically a class for the time that gets rid of all of js's date's mess
 */
export default class Time {
  private time: Date;

  constructor(hours: number | Date, minutes?: number) {
    this.time = hours instanceof Date ? hours : new Date(hours, minutes);
    this.time.setFullYear(0, 0, 0);
    this.time.setSeconds(0);
    this.time.setMilliseconds(0);
  }

  setHours(hours?: number, min?: number, sec?: number, ms?: number): void {
    this.time.setHours(hours, min, sec, ms);
  }

  getTime(): number {
    return this.time.getTime();
  }

  getHours(): number {
    return this.time.getHours();
  }

  getMinutes(): number {
    return this.time.getMinutes();
  }

  toDate(): Date {
    return this.time;
  }

  toString(): string {
    return this.time.toString();
  }
}
