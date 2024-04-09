function fetchDataAndStoreLocally() {
  fetch('leopards.json')
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('LeopardsData', JSON.stringify(data));
        console.log('Leopards data stored in localStorage successfully!');
    })
}

fetchDataAndStoreLocally();