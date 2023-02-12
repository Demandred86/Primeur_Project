import { addActive, hideResults, removeAll } from '../helpers/removeAddMarkup.js';
import { partialResults } from '../helpers/showMarkup.js';
import { idsArray } from './handleOnInput.js';
import { selectedCard } from '../services/config.js';
import updateInputField from '../helpers/updateInputField.js';
/** Handles Click on card, selecting it and showing the value in the input field
 * @param {*} e
 */

const handleOnSelect = function (e) {
  // Retrive the parent of the clicked element and exits if it's not the card container
  let clickedElement;
  const parentElement = e.target.parentElement?.classList.contains('box');
  const boxElement = e.target.classList.contains('box');
  if (!parentElement && !boxElement) return;

  parentElement ? (clickedElement = e.target.parentElement) : (clickedElement = e.target);
  // compare all the card ids with the clicked element id to find the match
  for (const el of partialResults) {
    if (el.id === +clickedElement.getAttribute('id')) {
      selectedCard.setSelectedCard(el);
      //updates the content of the input element
      updateInputField();
    }
  }
  // Removes all the extra markup
  removeAll(idsArray);
  addActive(selectedCard.id);

  // And hides the results
  hideResults();

  return;
};

export default handleOnSelect;
