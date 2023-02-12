/* import findMatchingResults from '../helpers/findMatchingResults.js';
import renderResults from '../helpers/showMarkup.js'; */
import { areFetched } from '../helpers/fetchData.js';
import { findMatchingResults, renderResults } from '../index.js';
import { MIN_NUM_OF_CHAR_BEFORE_RESULT } from '../services/config.js';
import { resultsHTML } from '../services/selectors.js';

let idsArray = [];

/** Listens for a change in the input and calls the functions to update the matches and results
 * @param {event} e
 * @param {array} fetchedDataArray Array of objects coming from the server
 */
const handleOnInput = function (e, fetchedDataArray) {
  //do nothing until the data from the server has been fetched
  if (!areFetched) return;

  //Each time the input changes => update the input value and reset the results div to empty.
  const inputFieldValue = e.target.value;
  resultsHTML.innerHTML = '';

  if (inputFieldValue.length < MIN_NUM_OF_CHAR_BEFORE_RESULT) return;

  const matchingElementsArray = findMatchingResults(inputFieldValue, fetchedDataArray);

  //Render results and return array with the ids of the results objects
  idsArray = renderResults(matchingElementsArray);
};

export default handleOnInput;
export { idsArray };
