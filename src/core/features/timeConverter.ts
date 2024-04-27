export default function timeConverter(minutes: number): string {
  const hours: number = Math.floor(minutes / 60);
  const mins: number = minutes - hours * 60;
  const minuteStr: string[] = ['минут', 'минуту', 'минуты'];

  return `${hours} часа ${mins} ${
    mins % 10 === 0 ? minuteStr[0] :
      mins % 10 === 1 ? minuteStr[1] :
      mins % 10 === 2 || mins % 10 === 3 || mins % 10 === 4 ? minuteStr[2] : minuteStr[0]
  }`;
}