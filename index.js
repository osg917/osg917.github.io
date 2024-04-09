function fetchDataAndStoreLocally() {
  fetch('index.json')
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('IndexData', JSON.stringify(data));
        console.log('Index data stored in localStorage successfully!');
    })
}

fetchDataAndStoreLocally();

