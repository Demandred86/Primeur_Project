/** Listens for a change in the input and calls the functions to update the matches and results
 * @param {event} e
 */

const handleOnInput = function (e) {
  if (!areFetched) return;

  //Each time the input changes => update the input value and reset the results div to empty.
  const inputFieldValue = e.target.value;
  resultsHTML.innerHTML = '';
  console.log(results);

  if (inputFieldValue.length < MIN_NUM_OF_CHAR_BEFORE_RESULT) return;
  results = findMatchingResults(inputFieldValue, fetchedDataArray);

  //Render results and return array with the ids of the results objects
  index = -1;
  ids = renderResults(results);
  0;
};
