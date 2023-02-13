import {
  debounce,
  fetchedDataArray,
  handleKeyPress,
  HandleOnClickField,
  handleOnInput,
  handleOnSelect,
} from './src/index.js';
import { TIMEOUT } from './src/services/config.js';
import { autocomplete } from './src/services/selectors.js';
//Event Listeners
autocomplete.addEventListener(
  'input',
  debounce((e) => handleOnInput(e, fetchedDataArray)),
  TIMEOUT
);

document.addEventListener('click', HandleOnClickField);
document.addEventListener('keydown', (e) => handleKeyPress(e));
document.addEventListener('click', (e) => handleOnSelect(e));
