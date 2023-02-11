const MAX_NUMBER_OF_DISPLAYED_RESULTS = 10;
const MIN_NUM_OF_CHAR_BEFORE_RESULT = 3;
const serverURL = 'https://api.jsonbin.io/v3/b/63e3882cebd26539d0790878/latest?meta=false ';

// <Tag> Selectors
const autocomplete = document.getElementById('autocomplete');
const resultsHTML = document.getElementById('result');
const wrapper = document.getElementById('autocomplete_wrapper');

/**
 *Returns TRUE of FALSE if the div containing the Results is visible or not.
 **/
const isDropDownVisible = wrapper.classList.contains('active');

/**
 *Debouncer Timeout
 *@param {number} TIMEOUT number of milliseconds to wait for debouncer to activate
 **/
const TIMEOUT = 300;

/**
 *Cache Object
 *Will contain the results of @findMatchingResults() function to prevent further calls to the server if the search has already been performed
 **/
let cache = {};

/**
 * Contains the results of transformation of server response from Object to Array
 */
let results;

/**
 * True when the servers has completed the data fetch successfully
 */
let areFetched = false;
let ids;
let result;
let partialResults = [];
