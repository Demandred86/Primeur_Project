// index set at -1 because at initialization no card is selected
let index = -1;

/** Manages ArrowUP, ArrowDown keypresses, changing adding or removing classes to the result cards
 *
 * @param {*} e
 * @param {array} ids
 */
function handleKeyPress(e, ids) {
  //exit if there are no results
  if (!ids?.length > 0 || ids === 'null') return;

  // show the result div
  resultsHTML.classList.remove('hidden');
  wrapper.classList.add('active');

  //handles keypresses input
  if (e.key === 'ArrowDown') {
    index++;
  } else if (e.key === 'ArrowUp') {
    index--;
  }
  switch (true) {
    case e.key === 'ArrowDown' && index <= ids.length - 1:
      removeAll(ids);
      addActive(ids[index]);
      break;
    case e.key === 'ArrowDown' && index > ids.length - 1:
      removeAll(ids);
      index = 0;
      addActive(ids[index]);
      break;
    case e.key === 'ArrowUp' && index >= 0:
      removeAll(ids);
      addActive(ids[index]);
      break;
    case e.key === 'ArrowUp' && index < 0:
      removeAll(ids);
      addActive(ids[ids.length - 1]);
      index = ids.length - 1;
      break;
  }
}

// helper markup functions. Handle the class that changes color of cards on selection/hover

/** Removes Active class from all Cards
 *
 * @param {arr} ids
 */
function removeAll(ids) {
  for (const id of ids) {
    document.getElementById(id).classList.remove('active');
  }
}

/** Add Active class to Card
 *
 * @param {number} id
 */
const addActive = (id) => {
  document.getElementById(id).classList.add('active');
};
