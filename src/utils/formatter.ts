export function formatTimestamp(time: {
  hour: number;
  minute: number;
  second: number;
}) {
  function addZeroSingleNumb(number: number) {
    return number < 10 ? `0${number}` : String(number);
  }

  let result = [];

  for (const value of Object.values(time)) {
    result.push(addZeroSingleNumb(value));
  }

  return result.join(':');
}
