import { sendData } from './api.js'
import { showMessage } from './util.js'

const uploadingForm = document.querySelector('.img-upload__form');


const setUserFormSubmit = (onSuccess, onFail) => {
  uploadingForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        showMessage('success', 'Успешно');
        onSuccess();
      },
      () => {
        showMessage('error', 'Упс...Не удалось загрузить. Попробуйте повторить через пару секунд');
        onFail();
      }),

    new FormData(evt.target)
  });
};


export { setUserFormSubmit }