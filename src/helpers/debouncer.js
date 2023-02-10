function debounce(func, wait = 300, immediate = false) {
  let timeoutm;

  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function () {
      timeoutm = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeoutm;

    clearTimeout(timeoutm);

    timeoutm = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}
