import {
  addActive,
  addActiveFromWrapper,
  hideResults,
  removeAll,
  removeHiddenFromResultsDiv,
} from '../helpers/removeAddMarkup.js';
import { resultsHTML, wrapper } from '../services/selectors.js';
import { idsArray } from './handleOnInput.js';
import { selectedCard } from '../services/config.js';
import { partialResults } from '../helpers/showMarkup.js';
import { updateInputField } from '../index.js';

// index set at -1 because at initialization no card is selected
let index = -1;

/** Manages ArrowUP, ArrowDown keypresses, changing adding or removing classes to the result cards
 *
 * @param {*} e
 * @param {array} ids
 */

function handleKeyPress(e) {
  //exit if there are no results or wrong key
  if (e.key !== 'Enter' && e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
  if (!idsArray?.length > 0 || idsArray === 'null') return;

  // show the result div
  removeHiddenFromResultsDiv();
  addActiveFromWrapper();

  //////////////////////////
  //handles keypresses inputs

  if (e.key === 'Escape') {
    hideResults();
  }

  if (e.key === 'Enter' && selectedCard.id !== '') {
    updateInputField();
    selectedCard.setSelectedCard(partialResults[index]);
    return;
  }

  if (e.key === 'ArrowDown') {
    index++;
  } else if (e.key === 'ArrowUp') {
    index--;
  }

  switch (true) {
    case e.key === 'ArrowDown' && index <= idsArray.length - 1:
      removeAll(idsArray);
      addActive(idsArray[index]);
      updateSelectedCard();

      break;
    case e.key === 'ArrowDown' && index > idsArray.length - 1:
      removeAll(idsArray);
      index = 0;
      addActive(idsArray[index]);
      updateSelectedCard();

      break;
    case e.key === 'ArrowUp' && index >= 0:
      removeAll(idsArray);
      addActive(idsArray[index]);
      updateSelectedCard();

      break;
    case e.key === 'ArrowUp' && index < 0:
      removeAll(idsArray);
      addActive(idsArray[idsArray.length - 1]);
      index = idsArray.length - 1;
      updateSelectedCard();
      break;
  }
}

const updateSelectedCard = () => {
  selectedCard.setSelectedCard(partialResults[index]);
};

export default handleKeyPress;
