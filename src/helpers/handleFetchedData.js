let dictionaryArray;
let areFetched = false;
const fetch = fetchData()
  .then((data) => {
    dictionaryArray = Object.values(data)[0];
    areFetched = true;
  })
  .catch(function (err) {
    console.error('error!', err.statusText);
  });
