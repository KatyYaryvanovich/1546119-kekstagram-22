
//модуль с функциями для работы со строками


const comLength = (checkedComment, maxLength) => checkedComment.length <= maxLength ? true : false;
comLength();


const capitalize = (str) => str.charAt(0).toUpperCase() + str.substring(1);
capitalize('hello');


const reverseString = (str) => str.split('').reverse().join('');
reverseString('hello');
