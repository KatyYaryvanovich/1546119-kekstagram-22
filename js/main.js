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

// id для фото
const idPhoto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

//адрес картинки
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

const  descriptionPhoto = [
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
  'Мли куинарные шедевры',
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

//количество лайков
const like = (min, max) => {
  if (min < 15 && max > 200) {
    throw new Error('error message');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Комментарии

//id для комментариев - комментариев может быть неизвесное количество, но у каждого коммента должен быть уникальный id, поэтому навскидку придумала, что пусть будет выборка из 200
// код для генерации неповторяющихся чисел - в случайном порядке заполнит массив
let idComment = [];
do {
  let num = Math.floor(Math.random() * 200 + 1);
  idComment.push(num);
  idComment = idComment.filter((item, index) => {
    return idComment.indexOf(item) === index
  });
} while (idComment.length < 200);

// аватарка, функция для выбора случайной аватарки
const avatarComment = () => {
  let x = (min, max) => {
    if (min < 1 && max > 6) {
      throw new Error('error message');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return `img/avatar-${x(1, 6)}.svg`;
}

// текст комментария
const messageComment = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// имя комментатора
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
]

//функция по поиску случайного элемента в массиве
const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

// функция для создания объекта с комментарием
const createComment = () => {
  return {
    idComment: getRandomArrayElement(idComment),
    avatar: avatarComment(),
    message: getRandomArrayElement(messageComment),
    name: getRandomArrayElement(nameComment),
  };
};

// функия для создания объекта фото
const createPhoto = () => {
  return {
    id: getRandomArrayElement(idPhoto),
    url: getRandomArrayElement(urlPhoto),
    description: getRandomArrayElement(descriptionPhoto),
    likes: like(15, 200),
    comments: createComment(),
  }
}

//количество необходимых объектов для генерации
const photoCount = 25;
// массив - список комментариев
const photoObjects = new Array(photoCount).fill(null).map(() => createPhoto());

/* Проблемы:
1. не знаю, как сделать так, чтобы фотографии, их id и описания к ним не повторялись в общем массиве
2. блок с комментариями comments выдаётся перед блоком с описанием фото, хотя в коде он после идёт
      return {
          id: getRandomArrayElement(idPhoto),
          url: getRandomArrayElement(urlPhoto),
          description: getRandomArrayElement(descriptionPhoto),
          likes: like(15, 200),
          comments: createComment(),
        }
3. похожая проблема - в блоке комментариев к фото avatar стоит на первом месте, хотя должен быть как в коде после idComment
          return {
          idComment: getRandomArrayElement(idComment),
          avatar: avatarComment(),
          message: getRandomArrayElement(messageComment),
          name: getRandomArrayElement(nameComment),
        };
*/

