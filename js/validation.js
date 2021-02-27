import { hashtagInput } from './upload-img.js'

hashtagInput.addEventListener('input', () => {

  const hashtagArr = hashtagInput.value.split(' ');

  hashtagArr.forEach((hashtag, index) => {

    const allowedSymbol = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
    const isValid = allowedSymbol.test(hashtag.split('#')[1]);

    if (!(hashtag[0] === '#')) {
      hashtagInput.setCustomValidity('хэш-тег должен начинаться с символа #')
    } else if (!isValid) {
      hashtagInput.setCustomValidity('хэш-тэг может состоять только из букв и чисел')
    } else if (hashtag.length === 1) {
      hashtagInput.setCustomValidity('хеш-тег не может состоять только из #')
    } else if (hashtag.length > 20) {
      hashtagInput.setCustomValidity('длина хэш-тега не более 20 символов');
    } else if (hashtagArr[index - 1] === hashtagArr[index]) {
      hashtagInput.setCustomValidity('хэш-тег не может повторяться')
    } else if (hashtagArr.length > 5) {
      hashtagInput.setCustomValidity('нельзя использовать больше пяти хэш-тегов')
    } else {
      hashtagInput.setCustomValidity('');
    }
  })
  hashtagInput.reportValidity();
});

