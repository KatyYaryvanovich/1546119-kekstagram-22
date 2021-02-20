import { getRandomArrEl, getRandomNum, getRandomRepeatArrEl } from './util.js';


const idPhoto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

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

const messageComment = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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

const idComment = [];
for ( let i = 0; i <= 200; i++ ) {
  idComment.push(i);
}

const photoCount = 25;

const createComment = () =>
  ({
    idComment: getRandomArrEl(idComment),
    avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
    message: getRandomRepeatArrEl(messageComment),
    name: getRandomRepeatArrEl(nameComment),
  });


const createCommentArr = () => {
  const commentArr = [];
  const commentCount = getRandomNum(1, 9);
  for (let i = 0; i < commentCount; i++) {
    commentArr.push(createComment(i));
  }
  return commentArr;
}


const createPhoto = () =>
  ({
    id: getRandomArrEl(idPhoto),
    url: getRandomArrEl(urlPhoto),
    description: getRandomArrEl(descriptionPhoto),
    likes: getRandomNum(15, 200),
    comments: createCommentArr(),
  });


const photoObjects = new Array(photoCount).fill(null).map(() => createPhoto());


export { photoObjects, idComment };

