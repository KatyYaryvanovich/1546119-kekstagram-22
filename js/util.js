import { hashtagInput } from './uploading-img.js'
import { sendData } from './api.js'

const main = document.querySelector('main');
const fragment = document.createDocumentFragment();
const uploadingForm = document.querySelector('.img-upload__form');
const uploadingCancel = document.querySelector('#upload-cancel');

const ALLOWED_SYMBOLS = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
const ERROR_MESSAGE = {
  errorStart: 'хэш-тег должен начинаться с символа #',
  errorSymbol: 'хэш-тэг может состоять только из букв и чисел',
  tooShort: 'хеш-тег не может состоять только из #',
  tooLong: 'длина хэш-тега не более 20 символов',
  errorRepeat: 'хэш-тег не может повторяться',
  tooMuch: 'нельзя использовать больше пяти хэш-тегов',
}


const getRandomNum = (min, max, precision) => {
  if (min < 0 && min < max) {
    throw new Error('error')
  }
  const n = min + Math.random() * (max + 1 - min)
  return !precision ? ~~n : n.toFixed(precision)
}

const getRandomArrEl = (arr, unique = false) => {
  const items = arr[getRandomNum(0, arr.length - 1)]
  if (unique) {
    arr.splice(arr.indexOf(items), 1)
  }
  return items
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

const showMessage = (messageType) => {
  const messageTemplate = document.querySelector(`#${messageType}`).content;
  const section = messageTemplate.querySelector(`.${messageType}`);
  const element = section.cloneNode(true);
  fragment.appendChild(element);
  main.appendChild(fragment);
  element.addEventListener('click', (element) => {
    if (element.target.closest(`.${messageType}__inner`) === null) {
      closeMessageModal();
    }
  });
  document.querySelector(`.${messageType}__button`).addEventListener('click', () => {
    closeMessageModal();
  });
  document.addEventListener('keydown', onMessageEscKeydown);
};

const closeMessageModal = () => {
  let removeElement = document.querySelector('.success');
  if (removeElement === null) {
    removeElement = document.querySelector('.error');
  }
  removeElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
};
const onMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    closeMessageModal();
  }
};


hashtagInput.addEventListener('input', () => {
  const hashtagsArr = hashtagInput.value.split(' ');
  hashtagsArr.forEach((hashtag, index) => {
    const isValid = ALLOWED_SYMBOLS.test(hashtag.split('#')[1]);
    if (!(hashtag[0] === '#')) {
      hashtagInput.setCustomValidity(ERROR_MESSAGE.errorStart)
    } else if (!isValid) {
      hashtagInput.setCustomValidity(ERROR_MESSAGE.errorSymbol)
    } else if (hashtag.length === 1) {
      hashtagInput.setCustomValidity(ERROR_MESSAGE.tooShort)
    } else if (hashtag.length > 20) {
      hashtagInput.setCustomValidity(ERROR_MESSAGE.tooLong);
    } else if (hashtagsArr[index - 1] === hashtagsArr[index]) {
      hashtagInput.setCustomValidity(ERROR_MESSAGE.errorRepeat)
    } else if (hashtagsArr.length > 5) {
      hashtagInput.setCustomValidity(ERROR_MESSAGE.tooMuch)
    } else {
      hashtagInput.setCustomValidity('');
    }
  })
  hashtagInput.reportValidity();
});


const handleFormSubmit = () => {
  uploadingForm.addEventListener('submit', (e) => {
    e.preventDefault()
    sendData(new FormData(e.target))
      .then(() => showMessage('success'))
      .catch(() => showMessage('error'))
    uploadingCancel.click();
  })
}

export { getRandomArrEl, getRandomNum, isEscEvent, isEnterEvent, showMessage, handleFormSubmit };
