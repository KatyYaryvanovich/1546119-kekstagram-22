/* 1. Функция, возвращающая случайное целое число из переданного диапазона включительно
Учтите, что диапазон может быть только положительный, включая ноль.
А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.*/

/* В задании указано - Только не забудьте указать ссылку на источник!
При написании функции я обращалась сюда https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random и сюда https://learn.javascript.ru/task/random-int-min-max
Так верно указывать источник?*/

const getRandomIntInclusive = (min, max) => {

  if (min < 0) {
    return 'Диапазон может быть только положительный';
  } else if (max <= min) {
    return 'Значение «max» должно быть больше значения «min»';
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

getRandomIntInclusive();

//2. Функция для проверки максимальной длины строки.
//имя_функции(проверяемая_строка, максимальная длина); Результат: true, если строка проходит по длине, и false — если не проходит

// 1-й способ
const commentLength = (checkedComment, maxLength) => {
  return (checkedComment.length <= maxLength) ? true : false;
}
commentLength();

// 2-й способ
const comLength = (checkedComment, maxLength) => checkedComment.length <= maxLength ? true : false;

comLength();

//3. Найди или реализуй функцию капитализации строки: функция принимает "hello", возвращает "Hello".

// 1-й способ
function upperCaseFirst(str){
  return str.charAt(0).toUpperCase() + str.substring(1);
}

upperCaseFirst('hello');

// 2-й способ
const capitalize = (str) => str.charAt(0).toUpperCase() + str.substring(1);

capitalize('hello');


// 4. Найди или реализуй функцию инверсии строки: функция принимает "hello", возвращает "olleh"

// 1-й способ - переворот строки с помощью встроенных методов

const reverseString = (str) => str.split('').reverse().join('');

reverseString('hello');

// 2-й способ - переворот строки с помощью рекурсии

const reverseStr = (str) => str === '' ? '' : reverseStr(str.substr(1)) + str.charAt(0);

reverseStr('hello');

// 3-й способ переворот строки с помощью цикла For

const reverseWord = (str) => {
  let newWord = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newWord += str[i];
  }
  return newWord;
}
reverseWord('hello');