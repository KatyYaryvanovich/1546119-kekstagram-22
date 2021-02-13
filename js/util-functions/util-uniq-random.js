// модуль с функциями для получения случайных и уникальных чисел и элементов


// функция для получения случайного целого числа
const isValid = (min, max) => min < max && min >= 0 && max > 0
const getRandomNum = (min, max) => {
  if (isValid(min, max)) return ~~(min + Math.random() * (max + 1 - min))
  else throw new Error('invalid')
}

// функция мемоизации - создание кэша
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


// функция для получения уникального идентификатора
const getUniqId = outerMemo(() =>
  (~~(Math.random() * 1e6)).toString(16).slice(0, 4).padStart(5, 'x'))
getUniqId()

//функция для получения уникального идентификатора из массива
const getRandomInt = (min, max) => ~~(Math.random() * (max - min + 1)) + min
const getRandomArrEl = (arr) => {
  const item = arr[getRandomInt(0, arr.length - 1)];
  arr.splice(arr.indexOf(item), 1);
  return item;
}


//функция для получения уникального идентификатора + должен сформироваться массив
const idComment = [];
for ( let i = 0; i <= 200; i++ ) {
  idComment.push(i);
}


//функция для получения из массива случайного целого числа с повтором
const getRandomRepeatArrEl = (arr) => {
  const item = arr[getRandomInt(0, arr.length - 1)];
  return item;
}

export { getRandomArrEl, getRandomNum, getRandomInt, getRandomRepeatArrEl, idComment };
