/* global _:readonly */

import { getRandomNum } from './util.js'
import { renderPreview } from './preview.js'

const blockImgFilters = document.querySelector('.img-filters')
const imgFiltersForm = document.querySelector('.img-filters__form')

const RANDOM_PICS_COUNT = 10
const RERENDER_DELAY = 500;

const setFiltration = (previewList) => {
  blockImgFilters.classList.remove('img-filters--inactive');
  const defaultImgArr = previewList.slice();
  renderPreview(defaultImgArr);

  imgFiltersForm.addEventListener('click', _.debounce((evt) => {
    for (let i = 0; i < imgFiltersForm.children.length; i++) {
      imgFiltersForm.children[i].classList.remove(
        'img-filters__button--active',
      );
    }
    evt.target.classList.add('img-filters__button--active');

    if (evt.target.id === 'filter-discussed') {
      const popularImgArr = defaultImgArr.slice();
      popularImgArr.sort((a, b) => {
        if (a.comments.length > b.comments.length) {
          return -1
        } else if (a.comments.length < b.comments.length) {
          return 1
        }
        return 0
      });
      renderPreview(popularImgArr);
    } else if (evt.target.id === 'filter-random') {
      const randomImagesArr = []
      for (let i = 0; i < RANDOM_PICS_COUNT; i++) {
        let element = previewList[getRandomNum(0, previewList.length - 1)]
        while (randomImagesArr.indexOf(element) !== -1) {
          element = previewList[getRandomNum(0, previewList.length - 1)]
        }
        randomImagesArr.push(element);
      }
      renderPreview(randomImagesArr);
    } else {
      renderPreview(defaultImgArr);
    }
  }, RERENDER_DELAY),
  )
}

export { setFiltration }
