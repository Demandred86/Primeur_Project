let fetchedDataArray;

/* Handles the answer from the server, creating an array of results */

fetchData(serverURL)
  .then((data) => {
    // used to tell the input event listener that he can start processing the input
    areFetched = true;
    fetchedDataArray = Object.values(data)[0];
  })
  .catch(function (err) {
    console.error('error!', err.statusText);
  });
