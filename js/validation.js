import { hashtagInput } from './upload-img.js'


const errorMessage = {
  errorStart: 'хэш-тег должен начинаться с символа #',
  errorSymbol: 'хэш-тэг может состоять только из букв и чисел',
  tooShort: 'хеш-тег не может состоять только из #',
  tooLong: 'длина хэш-тега не более 20 символов',
  errorRepeat: 'хэш-тег не может повторяться',
  tooMuch: 'нельзя использовать больше пяти хэш-тегов',
}


hashtagInput.addEventListener('input', () => {

  const hashtagArr = hashtagInput.value.split(' ');

  hashtagArr.forEach((hashtag, index) => {

    const allowedSymbol = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
    const isValid = allowedSymbol.test(hashtag.split('#')[1]);

    if (!(hashtag[0] === '#')) {
      hashtagInput.setCustomValidity(errorMessage.errorStart)
    } else if (!isValid) {
      hashtagInput.setCustomValidity(errorMessage.errorSymbol)
    } else if (hashtag.length === 1) {
      hashtagInput.setCustomValidity(errorMessage.tooShort)
    } else if (hashtag.length > 20) {
      hashtagInput.setCustomValidity(errorMessage.tooLong);
    } else if (hashtagArr[index - 1] === hashtagArr[index]) {
      hashtagInput.setCustomValidity(errorMessage.errorRepeat)
    } else if (hashtagArr.length > 5) {
      hashtagInput.setCustomValidity(errorMessage.tooMuch)
    } else {
      hashtagInput.setCustomValidity('');
    }
  })
  hashtagInput.reportValidity();
});

