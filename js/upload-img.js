import { isEscEvent, isEnterEvent } from './util.js'
import { scaleValue, scaleDefolt, uploadPreview } from './scale-upload-img.js'
import { slider } from './effect-upload-img.js';


const uploadImg = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const bodyModalOpen = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');



const openUploadImg = () => {
  uploadOverlay.classList.remove('hidden');
  bodyModalOpen.classList.add('modal-open');
  scaleValue.value = `${scaleDefolt} %`;
  uploadPreview.style.transform = 'scale(1)';
  uploadPreview.style.filter = 'none';
  slider.classList.add('visually-hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  uploadOverlay.addEventListener('keydown', onPopupEnterKeydown);
}

uploadImg.addEventListener('change', () => {
  openUploadImg();
});


const closeUploadImg = () => {
  uploadOverlay.classList.add('hidden');
  bodyModalOpen.classList.remove('modal-open');
  uploadImg.value = '';
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadOverlay.removeEventListener('keydown', onPopupEnterKeydown);
}

uploadCancel.addEventListener('click', () => {
  closeUploadImg();
});

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt) && !((commentInput === document.activeElement) || (hashtagInput === document.activeElement))) {
    evt.preventDefault();
    closeUploadImg();
  }
};

const onPopupEnterKeydown = (evt) => {
  if (isEnterEvent(evt)) {
    openUploadImg();
  }
};


export { hashtagInput }
