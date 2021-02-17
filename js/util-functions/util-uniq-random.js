// модуль с функциями для получения случайных и уникальных чисел и элементов


const isValid = (min, max) => min < max && min >= 0 && max > 0
const getRandomNum = (min, max) => {
  if (isValid(min, max)) return ~~(min + Math.random() * (max + 1 - min))
  else throw new Error('invalid')
}

function outerMemo(fn, cache = new Set()) {
  return function innerMemo(res = fn()) {
    if (cache.has(res)) {
      return innerMemo()
    } else {
      cache.add(res)
      return res
    }
  }
}

const getUniqId = outerMemo(() =>
  (~~(Math.random() * 1e6)).toString(16).slice(0, 4).padStart(5, 'x'))
getUniqId()


const getRandomInt = (min, max) => ~~(Math.random() * (max - min + 1)) + min
const getRandomArrEl = (arr) => {
  const item = arr[getRandomInt(0, arr.length - 1)];
  arr.splice(arr.indexOf(item), 1);
  return item;
}


const idComment = [];
for ( let i = 0; i <= 200; i++ ) {
  idComment.push(i);
}


const getRandomRepeatArrEl = (arr) => {
  const item = arr[getRandomInt(0, arr.length - 1)];
  return item;
}


export { getRandomArrEl, getRandomNum, getRandomInt, getRandomRepeatArrEl, idComment };
