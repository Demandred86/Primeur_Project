// helper markup functions. Handle the class that changes color of cards on selection/hover

import { autocomplete, resultsHTML, wrapper } from '../services/selectors.js';

/** Removes Active class from all Cards
 *
 * @param {arr} idsArray
 */
function removeAll(idsArray) {
  for (const id of idsArray) {
    document.getElementById(id).classList.remove('active');
  }
}

/** Add Active class to Card
 *
 * @param {number} id
 */
const addActive = (id) => {
  document.getElementById(id).classList.add('active');
  return document.getElementById(id);
};

/** Hides the results dropdown
 *
 */
const hideResults = () => {
  addHiddenToResultsDiv;
  removeActiveFromWrapper();
  autocomplete.focus();
};

//hide/show dropdowns
const addActiveFromWrapper = () => wrapper.classList.add('active');
const removeActiveFromWrapper = () => wrapper.classList.remove('active');
const addHiddenToResultsDiv = () => resultsHTML.classList.add('hidden');
const removeHiddenFromResultsDiv = () => resultsHTML.classList.remove('hidden');

export {
  removeAll,
  addActive,
  hideResults,
  addActiveFromWrapper,
  removeActiveFromWrapper,
  addHiddenToResultsDiv,
  removeHiddenFromResultsDiv,
};
