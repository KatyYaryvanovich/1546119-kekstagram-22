
import { isEscEvent, isEnterEvent } from './util.js'

const fullPicture = document.querySelector('.big-picture');
const commentsCountBox = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const bodyModalOpen = document.querySelector('body')
const cancelFullPicture = document.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const socialComment = commentsList.querySelector('.social__comment');

const commentsFragment = document.createDocumentFragment();

const avatarWidth = 35;
const avatarHeight = 35;
const shownComment = 5;

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
  commentsCountBox.classList.add('hidden')
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
  const pictureComments = preview.comments.slice(0);
  fullPicture.querySelector('.big-picture__img img').src = preview.url;
  fullPicture.querySelector('.likes-count').textContent = preview.likes;
  fullPicture.querySelector('.social__caption').textContent = preview.description;
  fullPicture.querySelector('.comments-count').textContent = preview.comments.length;

  while (commentsList.firstChild) {
    commentsList.removeChild(commentsList.firstChild);
  }

  const createCommentsList = (comments) => {
    const commentElement = socialComment.cloneNode(true);
    const commentAvatar = commentElement.querySelector('.social__picture')
    commentAvatar.width = avatarWidth;
    commentAvatar.height = avatarHeight;
    commentAvatar.src = comments.avatar;
    commentAvatar.alt = comments.name;
    commentElement.querySelector('.social__text').textContent = comments.message;
    return commentElement;
  }

  let fillCommentList = [];
  fillCommentList = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      commentsFragment.appendChild(createCommentsList(arr[i]));
    }
    commentsList.appendChild(commentsFragment);
  };

  const showCommentsLoader = () => {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', commentsLoaderButton);
  };

  const hideCommentsLoader = () => {
    commentsLoader.classList.add('hidden');
    commentsLoader.removeEventListener('click', commentsLoaderButton);
  };


  const commentsLoaderButton = () => {
    if (pictureComments.length <= shownComment) {
      hideCommentsLoader();
    }
    fillCommentList(pictureComments.splice(0, shownComment));
  };

  if (pictureComments.length <= shownComment) {
    hideCommentsLoader();
  } else {
    showCommentsLoader();
  }

  const showCommentsCount = () => {
    commentsCountBox.classList.remove('hidden');
    fillCommentList(pictureComments.splice(0, shownComment));
  };

  showCommentsCount();
}


export { getFullPicture };


