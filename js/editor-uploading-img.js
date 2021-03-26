/* global noUiSlider:readonly */

const slider = document.querySelector('.effect-level');
const imgUploadEffect = document.querySelector('.img-upload__effects');
const effectLevelValue = document.querySelector('.effect-level__value');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadingPreview = document.querySelector('.img-upload__preview img');

const SCALE_DEFOLT = 100;
const SCALE_MAX = 100;
const SCALE_STEP = 25;
let imgScaleValue = SCALE_DEFOLT;


scaleSmaller.addEventListener('click', () => {
  if (imgScaleValue > SCALE_STEP) {
    imgScaleValue -= SCALE_STEP;
    scaleValue.value = `${imgScaleValue}%`;
    uploadingPreview.style.transform = `scale(${imgScaleValue / 100})`;
  } else {
    throw new Error('invalid');
  }
});


scaleBigger.addEventListener('click', () => {
  if (imgScaleValue < SCALE_MAX) {
    imgScaleValue += SCALE_STEP;
    scaleValue.value = `${imgScaleValue}%`;
    uploadingPreview.style.transform = `scale(${imgScaleValue / 100})`;
  } else {
    throw new Error('invalid');
  }
});


const changeEffects =  (evt) => {
  const effectsItem = evt.target.closest('.effects__item');
  const effect = effectsItem.querySelector('.effects__preview');

  if (evt.target.matches('.effects__radio')) {
    uploadingPreview.className = effect.className;
    uploadingPreview.classList.remove('effects__preview');
  } else {
    throw new Error('invalid');
  }

  if (uploadingPreview.className === 'effects__preview--none') {
    slider.classList.add('visually-hidden');
    uploadingPreview.style.filter = 'none';
  } else {
    slider.classList.remove('visually-hidden');
  }
}

imgUploadEffect.addEventListener('change', changeEffects);

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
  switch (uploadingPreview.className) {
    case 'effects__preview--chrome':
      uploadingPreview.style.filter = 'grayscale(' + effectLevelValue.value + ')';
      break;
    case 'effects__preview--sepia':
      uploadingPreview.style.filter = 'sepia(' + effectLevelValue.value + ')';
      break;
    case 'effects__preview--marvin':
      uploadingPreview.style.filter = 'invert(' + effectLevelValue.value + '%)';
      break;
    case 'effects__preview--phobos':
      uploadingPreview.style.filter = 'blur(' + effectLevelValue.value + 'px)';
      break;
    case 'effects__preview--heat':
      uploadingPreview.style.filter = 'brightness(' + effectLevelValue.value + ')';
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


export { scaleValue, SCALE_DEFOLT, slider, uploadingPreview }
