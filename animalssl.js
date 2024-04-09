function fetchDataAndStoreLocally() {
  fetch('animalssl.json')
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('AnimalsslData', JSON.stringify(data));
        console.log('Animal data stored in localStorage successfully!');
    })
}

fetchDataAndStoreLocally();