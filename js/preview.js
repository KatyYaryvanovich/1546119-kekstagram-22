// import { photoObjects } from './data.js'
import { getFullPicture } from './full-picture.js'

const pictures = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const fragment = document.createDocumentFragment();


const getPreview = function (photoObjects) {
  photoObjects.forEach((preview) => {
    const element = newPictureTemplate.cloneNode(true);
    element.querySelector('.picture__img').src = preview.url;
    element.querySelector('.picture__likes').textContent = preview.likes;
    element.querySelector('.picture__comments').textContent = preview.comments.length;
    fragment.appendChild(element);

    element.addEventListener('click', () => {
      getFullPicture(preview);
    })
  });

  pictures.appendChild(fragment);
}

export { getPreview }
