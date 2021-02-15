//модуль с функциями для генерации объектов и массивов

import { idPhoto, urlPhoto, descriptionPhoto, messageComment, nameComment } from '../data.js';
import { getRandomArrEl, getRandomNum, getRandomInt, getRandomRepeatArrEl, idComment } from './util-uniq-random.js';



const createComment = () =>
  ({
    idComment: getRandomArrEl(idComment),
    avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
    message: messageComment.slice(0, (getRandomInt(1, 6))).join(', '),
    name: getRandomRepeatArrEl(nameComment),
  });



const createPhoto = () =>
  ({
    id: getRandomArrEl(idPhoto),
    url: getRandomArrEl(urlPhoto),
    description: getRandomArrEl(descriptionPhoto),
    likes: getRandomNum(15, 200),
    comments: createComment(),
  });



const photoCount = 25;

const photoObjects = new Array(photoCount).fill(null).map(() => createPhoto());
photoObjects();