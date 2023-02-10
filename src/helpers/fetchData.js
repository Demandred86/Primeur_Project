function fetchData() {
  return new Promise((resolve, reject) => {
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
}
