//check syntax

/** compares the server response data with the input to find a match
 *
 * @param {String} input The string received in the input field
 * @param {array} arr The array containing all the results from the server response
 * @returns array of objects matching the input request
 */
const findMatchingResults = (input, arr) => {
  const result = [];
  // If the fetching of data has not finished => exit
  if (!areFetched) return;

  // If input:result pair is already in cache => exit
  if (input in cache) {
    return cache[input];
  }

  for (const element of arr) {
    // If the element partially matches the input then push it into the result array
    if (Object.values(element).toString().toLowerCase().includes(input)) result.push(element);
  }
  //updates cache
  cache = { ...cache, [input]: result };

  //Returns array of objects
  return result;
};
