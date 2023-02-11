//Event Listeners
autocomplete.addEventListener('input', debounce(handleOnInput), TIMEOUT);
const selectedCard = resultsHTML.addEventListener('click', handleOnSelect);
document.addEventListener('click', HandleOnClickField);
//add event listener that cycles through the result cards
document.addEventListener('keydown', (e) => handleKeyPress(e, ids));
