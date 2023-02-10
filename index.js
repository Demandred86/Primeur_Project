const autocomplete = document.getElementById('autocomplete');
const resultsHTML = document.getElementById('result');
const wrapper = document.getElementById('autocomplete_wrapper');
const li = document.querySelectorAll('.result-element');
const isDropDownVisible = wrapper.classList.contains('active');

resultsHTML.addEventListener('click', handleOnSelect);
autocomplete.addEventListener('click', HandleOnClickField);
autocomplete.addEventListener('input', debounce(handleOnInput));
