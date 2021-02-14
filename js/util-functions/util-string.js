//модуль с функциями для работы со строками

//Функция для проверки максимальной длины строки.
const comLength = (checkedComment, maxLength) => checkedComment.length <= maxLength ? true : false;
comLength();
/*const commentLength = (checkedComment, maxLength) => {
  return (checkedComment.length <= maxLength) ? true : false;
}
commentLength();*/


//Функция капитализации строки
const capitalize = (str) => str.charAt(0).toUpperCase() + str.substring(1);
capitalize('hello');
/*function upperCaseFirst(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}
upperCaseFirst('hello');*/


//Функция инверсии строки
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
