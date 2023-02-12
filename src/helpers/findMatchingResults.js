//check syntax

/** compares the server response data with the input to find a match
 *
 * @param {String} input The string received in the input field
 * @param {array} arr The array containing all the results from the server response
 * @returns array of objects matching the input request
 */

/**
 *Cache Object
 *Will contain the results of @findMatchingResults() function to prevent further calls to the server if the search has already been performed
 **/
let cache = {};

const findMatchingResults = (input, fetcheDataArray) => {
  const matchingElementsArray = [];

  // If input:result pair is already in cache => exit
  if (input in cache) {
    return cache[input];
  }

  for (const element of fetcheDataArray) {
    // If the element partially matches the input then push it into the result array
    if (Object.values(element).toString().toLowerCase().includes(input)) matchingElementsArray.push(element);
  }
  //updates cache
  cache = { ...cache, [input]: matchingElementsArray };

  //Returns array of objects
  return matchingElementsArray;
};

export default findMatchingResults;
