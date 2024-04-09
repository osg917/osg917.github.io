function fetchDataAndStoreLocally() {
  fetch('wilpattu.json')
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('WilpattuData', JSON.stringify(data));
        console.log('Wilpattu data stored in localStorage successfully!');
    })
}

fetchDataAndStoreLocally();