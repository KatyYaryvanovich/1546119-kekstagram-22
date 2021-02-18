import { createPhoto } from './data.js'

const pictures = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const fragment = document.createDocumentFragment();

const userPicture = createPhoto();

for (let i = 0; i <= 25; i++) {
  userPicture.forEach(({ url, likes, comments }) => {
    const element = newPictureTemplate.cloneNode(true);
    element.querySelector('.picture__img').src = url;
    element.querySelector('.picture__likes').textContent = likes;
    element.querySelector('.picture__comments').textContent = comments;
    fragment.appendChild(element);
  });
}

pictures.appendChild(fragment);
