// <Tag> Selectors
const autocomplete = document.getElementById('autocomplete');
const resultsHTML = document.getElementById('result');
const wrapper = document.getElementById('autocomplete_wrapper');

/**
 *Returns TRUE of FALSE if the div containing the Results is visible or not.
 **/
const isDropDownVisible = wrapper.classList.contains('active');

export { autocomplete, resultsHTML, wrapper, isDropDownVisible };
