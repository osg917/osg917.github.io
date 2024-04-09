function fetchDataAndStoreLocally() {
  fetch('yala.json')
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('YalaData', JSON.stringify(data));
        console.log('Yala data stored in localStorage successfully!');
    })
}

fetchDataAndStoreLocally();

