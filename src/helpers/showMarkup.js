/** Creates Cards Markup. Each card contains the contact information of each match
 *
 * @param {Array} results
 * @returns
 */
function renderResults(results) {
  const idsArray = [];
  if (results.length > MAX_NUMBER_OF_DISPLAYED_RESULTS) {
    // Trims the results to show only the max number set in the config file
    partialResults = results.slice(0, MAX_NUMBER_OF_DISPLAYED_RESULTS);
  } else {
    partialResults = results;
  }

  // Markup "Showing number of results out of"
  showNumberOfResults(results);
  // Markup card with result data
  for (const result of partialResults) {
    resultsHTML.innerHTML += ` 
      <div tabindex="-1" id=${result.id} class="box red">
      <h2>${result.name}</h2>
      <p>${result.email}</p> <p>${result.phone}</p>
    </div>`;
    idsArray.push(result.id);
  }

  //Make visible: div with results
  wrapper.classList.add('active');

  return idsArray;
}

/** Markup "Showing number of results out of"
 *
 * @param {arr} results
 */
function showNumberOfResults(results) {
  resultsHTML.innerHTML += `<p id="number_of_results" class="number_of_results"> Displaying ${
    results.length < MAX_NUMBER_OF_DISPLAYED_RESULTS ? results.length : MAX_NUMBER_OF_DISPLAYED_RESULTS
  } out of ${results.length} results</p>`;
}
