const handleOnInput = function () {
  // event
  let input = this.value; // const
  resultsHTML.innerHTML = '';

  if (input.length >= MIN_NUM_OF_CHAR_BEFORE_RESULT) {
    let results = findMatchingResults(input, dictionaryArray); //const
    let numberOfResults = results.length; //const
    autocomplete.addEventListener('keydown', (e) => handleKeyPress(numberOfResults, e));

    /* results.forEach((result, i) => { */
    for (const result of results) {
      //use id value of the object as id
      resultsHTML.innerHTML += `<li class="result-element" id=${result[0]}>${result[1]}</li>`;
      document
        .getElementById(result[0])
        .addEventListener('onmouseover', (event) => console.log('on Mouse over event', event));
    }
    wrapper.classList.add('active');
  }
};

// immutable JS
