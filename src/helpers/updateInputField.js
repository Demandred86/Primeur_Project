import { selectedCard } from '../services/config.js';
import { autocomplete } from '../services/selectors.js';

const updateInputField = () => {
  autocomplete.value = `${selectedCard.name} | ${selectedCard.email} | ${selectedCard.phone} `;
};
export default updateInputField;
