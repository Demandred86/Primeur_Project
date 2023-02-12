import {
  addHiddenToResultsDiv,
  removeActiveFromWrapper,
  removeHiddenFromResultsDiv,
} from '../helpers/removeAddMarkup.js';

import { isDropDownVisible } from '../services/selectors.js';

/** Toggles the view of the results on click on the input field or outside
 */
const HandleOnClickField = function (e) {
  const targetIsInputField = e.target.getAttribute('id') === 'autocomplete';

  if (e.detail === 2) {
    if (targetIsInputField && isDropDownVisible) {
      removeActiveFromWrapper();
      addHiddenToResultsDiv();
    } else if (targetIsInputField && !isDropDownVisible) {
      addActiveFromWrapper();
      removeHiddenFromResultsDiv();
    }
  }
  if (!targetIsInputField) {
    removeActiveFromWrapper();
    addHiddenToResultsDiv();
  }
};
export default HandleOnClickField;
