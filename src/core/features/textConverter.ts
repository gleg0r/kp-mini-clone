export default function textConverter(text: string): string {
  if(text.length < 16) return text;

  const arr: string[] = text.split('');
  const newArr = arr.map((item, index) => {
    if(index < 16) return item;
    else return;
  });
  const newStr: string = newArr.join('') + '...';

  return newStr;
}