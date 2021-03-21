import { renderPreview } from './preview.js';
import './full-picture.js';
import { closeUploadImg } from './uploading-img.js';
import './editor-uploading-img.js';
import './validation.js';
import { getData } from './api.js';
import { handleFormSubmit } from './util.js'
import { setFiltration } from './filtration.js'


getData((pictures) => {
  renderPreview(pictures);
  setFiltration((pictures));
});

handleFormSubmit(closeUploadImg);
