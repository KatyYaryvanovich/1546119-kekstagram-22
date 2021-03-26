import { isEscEvent, isEnterEvent } from './util.js'
import { scaleValue, SCALE_DEFOLT, uploadingPreview, slider } from './editor-uploading-img.js'

const uploadingImg = document.querySelector('#upload-file');
const uploadingOverlay = document.querySelector('.img-upload__overlay');
const uploadingInput = document.querySelector('.img-upload__input');
const bodyModalOpen = document.querySelector('body');
const uploadingCancel = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const openUploadImg = () => {
  uploadingOverlay.classList.remove('hidden');
  bodyModalOpen.classList.add('modal-open');
  scaleValue.value = `${SCALE_DEFOLT} %`;
  uploadingPreview.style.transform = 'scale(1)';
  uploadingPreview.style.filter = 'none';
  slider.classList.add('visually-hidden');
  document.addEventListener('keydown', closeFormEscKeydown);
  uploadingOverlay.addEventListener('keydown', openFormEnterKeydown);
}
uploadingImg.addEventListener('change', () => {
  openUploadImg();
});

const closeUploadImg = () => {
  uploadingOverlay.classList.add('hidden');
  bodyModalOpen.classList.remove('modal-open');
  uploadingImg.value = '';
  uploadingInput.value = '';
  document.removeEventListener('keydown', closeFormEscKeydown);
  uploadingOverlay.removeEventListener('keydown', openFormEnterKeydown);
}

uploadingCancel.addEventListener('click', () => {
  closeUploadImg();
});


const closeFormEscKeydown = (evt) => {
  if (isEscEvent(evt) && !((commentInput === document.activeElement) || (hashtagInput === document.activeElement))) {
    uploadingCancel.click();
  }
};

const openFormEnterKeydown = (evt) => {
  if (isEnterEvent(evt)) {
    openUploadImg();
  }
};
export { hashtagInput, closeUploadImg }
