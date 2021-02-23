
const getRandomNum = (min, max, precision) => {
  if (min < 0 && min < max) throw new Error('error')
  const n = min + Math.random() * (max + 1 - min)
  return !precision ? ~~n : n.toFixed(precision)
}


const getRandomArrEl = (arr, unique = false) => {
  const item = arr[getRandomNum(0, arr.length - 1)]
  if (unique) arr.splice(arr.indexOf(item), 1)
  return item
}


const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};



export { getRandomArrEl, getRandomNum, isEscEvent, isEnterEvent };
