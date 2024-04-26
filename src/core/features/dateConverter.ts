const months: string[] = ['', 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export default function dateConverter(date: string) {
  const arrDate = date.split('-');
  const newDate: string = arrDate[2] + ' ' + months[+arrDate[1]] + ' ' + arrDate[0];

  return newDate;
}

