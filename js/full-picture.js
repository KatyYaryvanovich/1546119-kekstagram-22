import { isEscEvent, isEnterEvent } from './util.js'

const fullPicture = document.querySelector('.big-picture');
const commentsCountBox = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.social__comments-loader');
const bodyModalOpen = document.querySelector('body');
const cancelFullPicture = document.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const commentsFragment = document.createDocumentFragment();

const avatarWidth = 35;
const avatarHeight = 35;


const openFullPicture = () => {
  fullPicture.classList.remove('hidden');
  commentsCountBox.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bodyModalOpen.classList.add('.modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  fullPicture.addEventListener('keydown', onPopupEnterKeydown);
};

const closeFullPicture = () => {
  fullPicture.classList.add('hidden');
  commentsCountBox.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  bodyModalOpen.classList.remove('.modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  fullPicture.removeEventListener('keydown', onPopupEnterKeydown);
};

cancelFullPicture.addEventListener('click', () => {
  closeFullPicture();
});

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeFullPicture();
  }
};

const onPopupEnterKeydown = (evt) => {
  if (isEnterEvent(evt)) {
    openFullPicture();
  }
};



const getFullPicture = (preview) => {
  openFullPicture();
  document.querySelector('.big-picture__img img').src = preview.url;
  document.querySelector('.likes-count').textContent = preview.likes;
  document.querySelector('.social__caption').textContent = preview.description;
  document.querySelector('.comments-count').textContent = preview.comments.length;
  for (let i = 0; i < preview.comments.length; i++) {
    const comment = document.createElement('li');
    comment.classList.add('social__comment');
    const commentAvatar = document.createElement('img');
    commentAvatar.classList.add('social__picture');
    commentAvatar.src = preview.comments[i].avatar;
    commentAvatar.alt = preview.comments[i].name;
    commentAvatar.width = avatarWidth;
    commentAvatar.height = avatarHeight;
    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = preview.comments[i].message;
    comment.appendChild(commentAvatar);
    comment.appendChild(commentText);
    commentsFragment.appendChild(comment);
  }
  commentsList.appendChild(commentsFragment)
}

export { getFullPicture }






