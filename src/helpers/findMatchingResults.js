const findMatchingResults = (input, dictionary) => {
  //check syntax
  let results = []; // const

  if (input in cache) {
    return cache[input];
  }
  // If the fetching has finished
  if (areFetched === true) {
    //Cycle through the results
    for (let i = 0; i < dictionary.length; i++) {
      //  for of syntax
      // and push a result whose substring matches input
      if (Object.values(dictionary[i]).toString().includes(input)) {
        results.push(Object.values(dictionary[i]));
      }
    }
    //updates cache
    cache[input] = results; // look for alternatives
  }

  return results;
};
