const removeActive = (id) => {
  document.getElementById(id).classList.remove('active');
};
const addActive = (id) => {
  document.getElementById(id).classList.add('active');
};

let index = 0;
function handleKeyPress(numberOfResults, e) {
  // guard clauses
  if (!numberOfResults) return;

  //&& isDropDownHidden
  if (e.key === 'ArrowDown') {
    if (index === 0) {
      addActive(index);
      index++;
    } else if (index < numberOfResults) {
      removeActive(index - 1);
      addActive(index);
      index++;
    }
  }

  if (e.key === 'ArrowUp') {
    if (index > 0) {
      index--;
      removeActive(index);

      if (index - 1 >= 0) addActive(index - 1);
    }
    if (index === 0) {
      removeActive(index);
      autocomplete.focus();
    }
  }
}
