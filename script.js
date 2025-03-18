const apiKey = 'CxCd4hy9qMsyhaIm2iMSipu81-RZURXPJqc0EvLMyRk';
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', () => {
    let query = searchInput.value;
    if (query) {
      fetchImages(query);
    }
  });

  async function fetchImages(query) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`);
    const data = await response.json();
    displayImages(data.results);
  }

  function displayImages(images) {
    imageResults.innerHTML = '';
    images.forEach(image => {

      
      const imgElement = document.createElement('img');
      imgElement.src = image.urls.small;
      imgElement.alt = image.alt_description;
      imageResults.appendChild(imgElement);
    });
  }