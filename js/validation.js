import { hashtagInput } from './upload-img.js'

const ALLOWED_SYMBOLS = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
const ERROR_MESSAGE = {
  errorStart: 'хэш-тег должен начинаться с символа #',
  errorSymbol: 'хэш-тэг может состоять только из букв и чисел',
  tooShort: 'хеш-тег не может состоять только из #',
  tooLong: 'длина хэш-тега не более 20 символов',
  errorRepeat: 'хэш-тег не может повторяться',
  tooMuch: 'нельзя использовать больше пяти хэш-тегов',
}


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

