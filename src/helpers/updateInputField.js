import { selectedCard } from '../services/config.js';
import { autocomplete } from '../services/selectors.js';

const updateInputField = () => {
  autocomplete.value = `${selectedCard.card.name} | ${selectedCard.card.email} | ${selectedCard.card.phone} `;
};
export default updateInputField;
