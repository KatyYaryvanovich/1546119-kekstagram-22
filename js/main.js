// import './data.js';
import { getPreview } from './preview.js';
import './full-picture.js';
import { closeUploadImg } from './upload-img.js';
import './effect-upload-img.js';
import './validation.js';
import { getData } from './api.js';
import { setUserFormSubmit } from './message-for-user.js'
import { setFiltration } from './filtration.js'


getData((pictures) => {
  getPreview(pictures);
  setFiltration((pictures));
});

setUserFormSubmit(closeUploadImg);
