/** Toggles the view of the results on click on the input field or outside
 */

const HandleOnClickField = function (e) {
  const isDropDownVisible = wrapper.classList.contains('active');
  const targetIsInputField = e.target.getAttribute('id') === 'autocomplete';
  const removeActiveFromWrapper = () => wrapper.classList.remove('active');
  const addActiveFromWrapper = () => wrapper.classList.add('active');
  const addHiddenToResultsDiv = () => resultsHTML.classList.add('hidden');
  const removeHiddenFromResultsDiv = () => resultsHTML.classList.remove('hidden');

  if (targetIsInputField && isDropDownVisible) {
    removeActiveFromWrapper();
    addHiddenToResultsDiv();
  } else if (targetIsInputField && !isDropDownVisible) {
    addActiveFromWrapper();
    removeHiddenFromResultsDiv();
  }
  if (!targetIsInputField) {
    removeActiveFromWrapper();
    addHiddenToResultsDiv();
  }
};
