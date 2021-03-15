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


export { scaleValue, SCALE_DEFOLT, uploadingPreview }

