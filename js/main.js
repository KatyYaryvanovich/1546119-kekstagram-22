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
function upperCaseFirst(str) {
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

/* ==========================================================================*/

// Задание 3

//Условия, база данных

// id для фото - Идентификаторы не должны повторяться
// ! в качестве идентификаторов лучше строки использовать в будущем коде
const idPhoto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

//адрес картинки - Адреса картинок не должны повторяться.
const urlPhoto = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];

// описание фотографии
const descriptionPhoto = [
  'Это рай на земле',
  'Наконец-то отпуск',
  'Это же остров Баунти',
  'Люблю фотографировать',
  'Мои эксперименты',
  'Супер технологии воплощаются в реальность',
  'Люблю поесть',
  'Ммм.. вкусненько!',
  'Пора в отпуск',
  'Sweet home',
  'Красота вокруг нас',
  'Так и живём',
  'Мои куинарные шедевры',
  'Искусство, как я его вижу',
  'Время отдохнуть',
  'Ну красота же, да?',
  'Наша культурная программа на вечер',
  'Old scool',
  'Живём технологично',
  'Скорее бы в лето',
  'Наслаждение',
  'На это можно смотреть бесконечно',
  'Вот она какая, дикая природа',
  'Хорошо повеселились',
  'Жизнь бывает и такой',
];

//количество лайков - случайное число от 15 до 200

/*------------------*/
// Комментарии

//id для комментариев - случайное число, не должно повторяться
//комментариев может быть неизвесное количество, но у каждого коммента должен быть уникальный id, поэтому навскидку придумала, что пусть будет выборка из 200
const idComment = [];
for ( let i = 0; i <= 200; i++ ) {
  idComment.push(i);
}

// текст комментария - одно или два случайных предложения
const messageComment = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// имя комментатора - случайное
const nameComment = [
  'Петя',
  'Ваня',
  'Катя',
  'Маша',
  'Даша',
  'Саша',
  'Ксюша',
  'Петруша',
  'Манюша',
  'Ильюша',
];

/* ==========================================================================*/

// функция для получения случайного целого числа, она допусает, что число может повторяться
const isValid = (min, max) => min < max && min >= 0 && max > 0
const getRandomNum = (min, max) =>
  !isValid(min, max)
    ? new Error('error')
    : min === max
      ? min  //
      : ~~(min + Math.random() * (max + 1 - min))

//функция для получения из массива случайного целого числа  без его повтора
const getRandomInt = (min, max) => ~~(Math.random() * (max - min + 1)) + min
const getRandomArrayElement = (arr) => {
  const item = arr[getRandomInt(0, arr.length - 1)];
  arr.splice(arr.indexOf(item), 1);
  return item;
}

//функция по поиску случайного элемента в массиве с повтором
// const getRandomRepeatableArrayElement = (elements) => {
//   return elements[_.random(0, elements.length - 1)];
// };
//? эта тоже подходит - тогда lodash не нужен?
const getRandomRepeatableArrayElement = (arr) => {
  const item = arr[getRandomInt(0, arr.length - 1)];
  return item;
}



// функция для создания объекта с комментарием
const createComment = () =>
  ({
    idComment: getRandomArrayElement(idComment),
    // avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg
    avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
    message: messageComment.slice(0, (getRandomInt(1, 6))).join(', '),
    name: getRandomRepeatableArrayElement(nameComment),
  });

//? Вообще comments -должен быть массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
//?Количество комментариев к каждой фотографии вы определяете на своё усмотрение.Все комментарии генерируются случайным образом.
//?Я делала так
//?const commetArr = new Array(5).fill(null).map(() => createComment()) -  к меня получается массив из 5 объектов.
//?Но когда подставляю в const createPhoto - comments: commetArr - к первому фото выдаёт массив комментов, а к следующим уже пишет ошибку [circular object Array]

// функция для создания объекта фото
const createPhoto = () =>
  ({
    id: getRandomArrayElement(idPhoto),
    url: getRandomArrayElement(urlPhoto),
    description: getRandomArrayElement(descriptionPhoto),
    likes: getRandomNum(15, 200),
    comments: createComment(),
  });

//количество необходимых объектов для генерации
const photoCount = 25;

// массив - список комментариев
const photoObjects = new Array(photoCount).fill(null).map(() => createPhoto());

// если пишу console.log - Eslint указывает, что нельзя использовать console, если убрать это слово, то const photoObjects будет подчёркнуто
photoObjects


