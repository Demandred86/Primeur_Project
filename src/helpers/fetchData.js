import { serverURL } from '../services/config.js';

/** Handles the request to the server
 *
 * @returns an object containing an array of objects
 */
const fetchData = new Promise((resolve, reject) => {
  let newXHR = new XMLHttpRequest();
  newXHR.open('GET', serverURL);
  newXHR.setRequestHeader('X-Access-Key', '$2b$10$dryREKD6VpntRYSt/pS.nuro5E8zMx6gHKIVnqCO3OYi/YJ3fpDNW');
  newXHR.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(`ERR:` + this.status);
      }
    }
  };
  newXHR.send();
});
/**
 * True when the servers has completed the data fetch successfully
 */
let areFetched = false;

/* Handles the answer from the server, creating an array of results */

const fetchedDataArray = await fetchData
  .then((data) => {
    // used to tell the input event listener that he can start processing the input
    areFetched = true;
    return Object.values(data)[0];
  })
  .catch(function (err) {});

export { areFetched, fetchedDataArray };
