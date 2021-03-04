import { sendData } from './api.js'
import { showMessage } from './util.js'

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
}


const uploadForm = document.querySelector('.img-upload__form');

const setUserFormSubmit = (onSuccess, onFail) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(() => {
      showMessage();
      showAlert('Успешно');
      onSuccess();
    }),

    sendData(() => {
      showMessage();
      showAlert('Упс...Не удалось загрузить. Попробуйте повторить через пару секунд');
      onFail();
    }),

    new FormData(evt.target)
  });
};

export { setUserFormSubmit }
