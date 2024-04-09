function fetchDataAndStoreLocally() {
  fetch('intro.json')
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('IntroData', JSON.stringify(data));
        console.log('Intro data stored in localStorage successfully!');
    })
}

fetchDataAndStoreLocally();

