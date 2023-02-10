const handleOnSelect = function (e) {
  e.stopPropagation();
  index = 0;
  if (e.target.nodeName === 'LI') {
    autocomplete.value = e.target.innerHTML;
    wrapper.classList.remove('active');
    return e.target;
  }
};
