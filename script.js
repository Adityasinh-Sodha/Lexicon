function searchGames() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const resultsContainer = document.getElementById('searchResults');

  // Clear previous results
  resultsContainer.innerHTML = '';

  // Combine both NES and PSP games
  const allGames = (window.nesGames || []).concat(window.pspGames || []);

  // Filter based on search query
  const filteredGames = allGames.filter(game => game.title.toLowerCase().includes(query));

  if (filteredGames.length === 0) {
    resultsContainer.innerHTML = '<p>No games found.</p>';
    return;
  }

  // Display search results
  filteredGames.forEach(game => {
    const gameElement = document.createElement('div');
    gameElement.classList.add('search-result');

    // Determine platform and set the correct cover path
    let coverPath = game.cover;
    if (game.platform === 'NES') {
      coverPath = `nes/${game.cover}`;
    } else if (game.platform === 'PSP') {
      coverPath = `psp/${game.cover}`;
    } 

    gameElement.innerHTML = `
      <img src="${coverPath}" alt="${game.title}" class="search-cover">
      <h2>${game.title}</h2>
      <a href="${game.link}" target="_blank">Download</a>
    `;

    resultsContainer.appendChild(gameElement);
  });
}
