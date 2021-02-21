const isValid = (min, max) => min < max && min >= 0 && max > 0
const getRandomNum = (min, max) => {
  if (isValid(min, max)) return ~~(min + Math.random() * (max + 1 - min))
  else throw new Error('invalid')
}

const getRandomInt = (min, max) => ~~(Math.random() * (max - min + 1)) + min
const getRandomArrEl = (arr) => {
  const item = arr[getRandomInt(0, arr.length - 1)];
  arr.splice(arr.indexOf(item), 1);
  return item;
}


const getRandomRepeatArrEl = (arr) => {
  const item = arr[getRandomInt(0, arr.length - 1)];
  return item;
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};




export { getRandomArrEl, getRandomNum, getRandomRepeatArrEl, isEscEvent, isEnterEvent };
