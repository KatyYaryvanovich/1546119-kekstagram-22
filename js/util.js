const getRandomNum = (min, max, precision) => {
  if (min < 0 && min < max) throw new Error('error')
  const n = min + Math.random() * (max + 1 - min)
  return !precision ? ~~n : n.toFixed(precision)
}


const getRandomArrEl = (arr, unique = false) => {
  const item = arr[getRandomNum(0, arr.length - 1)]
  if (unique) arr.splice(arr.indexOf(item), 1)
  return item
}


const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};



const showMessage = function (messageType) {
  const main = document.querySelector('main');
  const messageTemplate = document.querySelector(`#${messageType}`).content;
  const section = messageTemplate.querySelector(`.${messageType}`);
  const fragment = document.createDocumentFragment();

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
  if (removeElement === null){
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


export { getRandomArrEl, getRandomNum, isEscEvent, isEnterEvent, showMessage };
