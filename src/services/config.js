const MAX_NUMBER_OF_DISPLAYED_RESULTS = 10;
const MIN_NUM_OF_CHAR_BEFORE_RESULT = 3;
const serverURL = 'https://api.jsonbin.io/v3/b/63e3882cebd26539d0790878/latest?meta=false ';
/**
 *Debouncer Timeout
 *@param {number} TIMEOUT number of milliseconds to wait for debouncer to activate
 **/
const TIMEOUT = 1000;

/**
 * Contains the results of transformation of server response from Object to Array
 */

const selectedCard = {
  card: {
    id: '',
    name: '',
    email: '',
    phone: '',
  },
  setSelectedCard(obj) {
    this.card.id = obj.id;
    this.card.name = obj.name;
    this.card.email = obj.email;
    this.card.phone = obj.phone;
  },
  getSelectedCard() {
    return { id: this.id, name: this.name, email: this.email, phone: this.phone };
  },
};

export const { setSelectedCard, getSelectedCard } = selectedCard;
export { selectedCard, MAX_NUMBER_OF_DISPLAYED_RESULTS, MIN_NUM_OF_CHAR_BEFORE_RESULT, serverURL, TIMEOUT };
