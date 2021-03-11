/* global _:readonly */
import { getRandomNum } from './util.js';
import { getPreview } from './preview.js';

const blockImgFilters = document.querySelector('.img-filters');
const imgFiltersForm = document.querySelector('.img-filters__form');

const RERENDER_DELAY = 500;
const randomPicsCount = 10;
let getDefaultImgArr;
let getRandomImgArr;
let getPopularImgArr;

const getCallBack = (cb) => {
  cb();
};

const setFiltration = (previewList) => {
  blockImgFilters.classList.remove('img-filters--inactive');
  const defaultImgArr = previewList.slice();
  getPreview(defaultImgArr);

  imgFiltersForm.addEventListener('click', (evt) => {

    for (let i = 0; i < imgFiltersForm.children.length; i++) {
      imgFiltersForm.children[i].classList.remove('img-filters__button--active');
    }
    evt.target.classList.add('img-filters__button--active');

    if (evt.target.id === 'filter-discussed') {
      const popularImgArr = defaultImgArr.slice();
      popularImgArr.sort((a, b) => {
        if (a.comments.length > b.comments.length) {
          return -1;
        } else if (a.comments.length < b.comments.length) {
          return 1;
        }
        return 0;
      });

      getPopularImgArr = getCallBack(_.debounce(
        () => getPreview(popularImgArr),
        RERENDER_DELAY,
      ));
    }

    else if (evt.target.id === 'filter-random') {
      const randomImgArr = [];
      for (let i = 0; i < randomPicsCount; i++) {
        let element = previewList[getRandomNum(0, previewList.length - 1)];
        while (randomImgArr.indexOf(element) !== -1) {
          element = previewList[getRandomNum(0, previewList.length - 1)];
        }
        randomImgArr.push(element);
      }

      getRandomImgArr = getCallBack(_.debounce(
        () => getPreview(randomImgArr),
        RERENDER_DELAY,
      ));
    }

    else {
      getDefaultImgArr = getCallBack(_.debounce(
        () => getPreview(defaultImgArr),
        RERENDER_DELAY,
      ));
    }
  });
}

export {setFiltration, getDefaultImgArr, getRandomImgArr, getPopularImgArr};
