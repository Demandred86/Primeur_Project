/** Debouncer function
 * wait an amount of milliseconds before firing the function
 * @param {*} func the function that needs to be debounced
 * @param {number} wait Waiting time within which fire the next debounde
 * @param {boolean} immediate if TRUE, immediately fires the function
 * @returns
 */
function debounce(func, wait = 1000, immediate = false) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

export default debounce;
