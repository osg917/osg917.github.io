function fetchDataAndStoreLocally() {
  fetch('wildlifedept.json')
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('WildlifedeptData', JSON.stringify(data));
        console.log('Wildlifedept data stored in localStorage successfully!');
    })
}

fetchDataAndStoreLocally();