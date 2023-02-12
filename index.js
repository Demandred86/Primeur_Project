/* import debounce from './src/helpers/debouncer.js';
import { fetchedDataArray } from './src/helpers/fetchData.js'; */
import {
  debounce,
  fetchedDataArray,
  handleKeyPress,
  HandleOnClickField,
  handleOnInput,
  handleOnSelect,
} from './src/index.js';
import { TIMEOUT } from './src/services/config.js';
//Event Listeners

autocomplete.addEventListener(
  'input',
  debounce((e) => handleOnInput(e, fetchedDataArray)),
  TIMEOUT
);

document.addEventListener('click', HandleOnClickField);
document.addEventListener('keydown', (e) => handleKeyPress(e));
document.addEventListener('click', (e) => handleOnSelect(e));
