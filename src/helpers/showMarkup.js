import { MAX_NUMBER_OF_DISPLAYED_RESULTS } from '../services/config.js';
import { resultsHTML } from '../services/selectors.js';
import { addActiveFromWrapper } from './removeAddMarkup.js';

/**
 * Contains a fraction of the original result array (array of objects)
 */
let partialResults;
let areResultsChanged = false;

/** Creates Cards Markup. Each card contains the contact information of each match
 *
 * @param {Array} array
 * @returns
 */

function renderResults(array) {
  const idsArray = [];

  // Trims the results to show only the max number set in the config file
  array.length > MAX_NUMBER_OF_DISPLAYED_RESULTS
    ? (partialResults = array.slice(0, MAX_NUMBER_OF_DISPLAYED_RESULTS))
    : (partialResults = array);

  // Markup "Showing number of results out of"
  showNumberOfResults(array);

  // Markup card with result data
  for (const element of partialResults) {
    resultsHTML.innerHTML += ` 
      <div tabindex="-1" id=${element.id} class="box red">
      <h2>${element.name}</h2>
      <p>${element.email}</p> <p>${element.phone}</p>
    </div>`;
    idsArray.push(element.id);
  }

  //Make visible: div with results
  addActiveFromWrapper();

  return idsArray;
}

/** Markup "Showing number of results out of"
 *
 * @param {arr} array
 */
function showNumberOfResults(array) {
  resultsHTML.innerHTML += `<p id="number_of_results" class="number_of_results"> Displaying ${
    array.length < MAX_NUMBER_OF_DISPLAYED_RESULTS ? array.length : MAX_NUMBER_OF_DISPLAYED_RESULTS
  } out of ${array.length} results</p>`;
}

export default renderResults;
export { showNumberOfResults, partialResults, areResultsChanged };
