import { isEscEvent, isEnterEvent } from './util.js'

const fullPicture = document.querySelector('.big-picture');
const commentsCountBox = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const bodyModalOpen = document.querySelector('body')
const cancelFullPicture = document.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const socialComment = commentsList.querySelector('.social__comment');
const commentsFragment = document.createDocumentFragment();

const SHOWN_COMMENT = 5;


const openFullPicture = () => {
  fullPicture.classList.remove('hidden');
  commentsCountBox.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bodyModalOpen.classList.add('.modal-open');
  document.addEventListener('keydown', closePopupEscKeydown);
  fullPicture.addEventListener('keydown', openPopupEnterKeydown);
};

const closeFullPicture = () => {
  fullPicture.classList.add('hidden');
  commentsCountBox.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  bodyModalOpen.classList.remove('.modal-open');
  document.removeEventListener('keydown', closePopupEscKeydown);
  fullPicture.removeEventListener('keydown', openPopupEnterKeydown);
  commentsCountBox.classList.add('hidden')
};

cancelFullPicture.addEventListener('click', () => {
  closeFullPicture();
});

const closePopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeFullPicture();
  }
};

const openPopupEnterKeydown = (evt) => {
  if (isEnterEvent(evt)) {
    openFullPicture();
  }
};

const createCommentsList = (comments) => {
  const commentElement = socialComment.cloneNode(true);
  const commentAvatar = commentElement.querySelector('.social__picture')
  commentAvatar.src = comments.avatar;
  commentAvatar.alt = comments.name;
  commentElement.querySelector('.social__text').textContent = comments.message;
  return commentElement;
}

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

  const showCommentsLoader = () => {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', commentLoaderButton);
  };

  const hideCommentsLoader = () => {
    commentsLoader.classList.add('hidden');
    commentsLoader.removeEventListener('click', commentLoaderButton);
  };

  const picture = {
    arrComments: [],
    nextComment: 0,
  };

  const commentLoaderButton = () => {
    picture.arrComments.slice(picture.nextComment, picture.nextComment + SHOWN_COMMENT).forEach((comment) => {
      commentsFragment.appendChild(createCommentsList(comment));
    });
    commentsList.appendChild(commentsFragment);
    picture.nextComment += SHOWN_COMMENT;

    if (picture.nextComment >= picture.arrComments.length) {
      hideCommentsLoader();
      picture.nextComment = 0;

    }
    if (picture.nextComment) {
      commentsCountBox.childNodes[0].nodeValue = `${picture.nextComment} из `;
    }
    else {
      commentsCountBox.childNodes[0].nodeValue = `${picture.arrComments.length} из `;
    }
  };

  picture.arrComments = preview.comments;
  commentLoaderButton()

  if (pictureComments.length <= SHOWN_COMMENT) {
    hideCommentsLoader();
  } else {
    showCommentsLoader();
  }

  const showCommentsCount = () => {
    commentsCountBox.classList.remove('hidden');
    picture(pictureComments.splice(0, SHOWN_COMMENT));
  };

  showCommentsCount();
}

export { getFullPicture };
