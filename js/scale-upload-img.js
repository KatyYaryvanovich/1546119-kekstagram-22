const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview img');
const scaleDefolt = 100;
const scaleMax = 100;
const scaleStep = 25;
let imgScaleValue = scaleDefolt;


scaleSmaller.addEventListener('click', () => {
  if (imgScaleValue > scaleStep) {
    imgScaleValue -= scaleStep;
    scaleValue.value = `${imgScaleValue}%`;
    uploadPreview.style.transform = `scale(${imgScaleValue / 100})`;
  } else {
    throw new Error('invalid');
  }
});


scaleBigger.addEventListener('click', () => {
  if (imgScaleValue < scaleMax) {
    imgScaleValue += scaleStep;
    scaleValue.value = `${imgScaleValue}%`;
    uploadPreview.style.transform = `scale(${imgScaleValue / 100})`;
  } else {
    throw new Error('invalid');
  }
});


export { scaleValue, scaleDefolt, uploadPreview }

