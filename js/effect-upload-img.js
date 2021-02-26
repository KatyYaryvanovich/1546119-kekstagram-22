/* global noUiSlider:readonly */
import { uploadPreview } from './scale-upload-img.js'

const slider = document.querySelector('.effect-level');
const imgUploadEffect = document.querySelector('.img-upload__effects');
const effectLevelValue = document.querySelector('.effect-level__value');


const onChangeEffects =  (evt) => {
  const effectsItem = evt.target.closest('.effects__item');
  const effect = effectsItem.querySelector('.effects__preview');

  if (evt.target.matches('.effects__radio')) {
    uploadPreview.className = effect.className;
    uploadPreview.classList.remove('effects__preview');
  } else {
    throw new Error('invalid');
  }

  if (uploadPreview.className === 'effects__preview--none') {
    slider.classList.add('visually-hidden');
    uploadPreview.style.filter = 'none';
  } else {
    slider.classList.remove('visually-hidden');
  }
}

imgUploadEffect.addEventListener('change', onChangeEffects);

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

slider.noUiSlider.on('update', (values, handle) => {
  effectLevelValue.value = values[handle];
  switch (uploadPreview.className) {
    case 'effects__preview--chrome':
      uploadPreview.style.filter = 'grayscale(' + effectLevelValue.value + ')';
      break;
    case 'effects__preview--sepia':
      uploadPreview.style.filter = 'sepia(' + effectLevelValue.value + ')';
      break;
    case 'effects__preview--marvin':
      uploadPreview.style.filter = 'invert(' + effectLevelValue.value + '%)';
      break;
    case 'effects__preview--phobos':
      uploadPreview.style.filter = 'blur(' + effectLevelValue.value + 'px)';
      break;
    case 'effects__preview--heat':
      uploadPreview.style.filter = 'brightness(' + effectLevelValue.value + ')';
      break;
  }

});

imgUploadEffect.addEventListener('change', (evt) => {
  if (evt.target.value === 'chrome') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    });
    slider.noUiSlider.set(1)
  } else if (evt.target.value === 'sepia') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    });
    slider.noUiSlider.set(1)
  } else if (evt.target.value === 'marvin') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
    slider.noUiSlider.set(100)
  } else if (evt.target.value === 'phobos') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
    });
    slider.noUiSlider.set(3)
  } else if (evt.target.value === 'heat') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
    });
    slider.noUiSlider.set(3)
  }
});

export {slider};
