function searchGames() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const resultsContainer = document.getElementById('searchResults');

  resultsContainer.innerHTML = '';

  const allGames = (window.nesGames || []).concat(window.pspGames || []);

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

const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

// Open sidebar
menuToggle.addEventListener('click', () => {
  sidebar.style.width = '250px';
  document.body.classList.add('menu-open');
});

// Close sidebar
closeBtn.addEventListener('click', () => {
  sidebar.style.width = '0';
  document.body.classList.remove('menu-open');
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
    sidebar.style.width = '0';
    document.body.classList.remove('menu-open');
  }
});
