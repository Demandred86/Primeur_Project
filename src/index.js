import handleKeyPress from './events/handleKeyPress.js';
import HandleOnClickField from './events/HandleOnClickField.js';
import handleOnInput from './events/handleOnInput.js';
import handleOnSelect from './events/handleOnSelect.js';

import debounce from './helpers/debouncer.js';
import { fetchedDataArray } from './helpers/fetchData.js';
import findMatchingResults from './helpers/findMatchingResults.js';
import renderResults from './helpers/showMarkup.js';
import updateInputField from './helpers/updateInputField.js';

export {
  HandleOnClickField,
  handleKeyPress,
  handleOnInput,
  handleOnSelect,
  debounce,
  fetchedDataArray,
  renderResults,
  updateInputField,
  findMatchingResults,
};
