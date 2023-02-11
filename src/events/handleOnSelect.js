/** Handles Click on card, selecting it and showing the value in the input field
 * @param {*} e
 */

const handleOnSelect = function (e) {
  let selectedCard;

  // Retrive the parent of the clicked element and exits if it's not the card container
  const clickedElement = e.target.parentElement;
  if (!clickedElement.classList.contains('box')) return;

  // compare all the card ids with the clicked element id to find the match
  for (const el of results) {
    if (el.id === +clickedElement.getAttribute('id')) {
      selectedCard = el;
      //updates the content of the input element
      autocomplete.value = `${el.name} | ${el.email} | ${el.phone} `;
    }
  }
  // Removes all the extra markup
  removeAll(ids);
  addActive(selectedCard.id);

  // And hides the results
  resultsHTML.classList.add('hidden');
  wrapper.classList.remove('active');
  autocomplete.focus();

  return selectedCard;
};
