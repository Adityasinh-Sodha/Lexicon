const games = [
  { cover: 'nes_games/nes_covers/Adventure island 3.png', title: 'Adventure Island 3', link: '#' },
  { cover: 'nes_games/nes_covers/Adventure Island II (USA).png', title: 'Adventure Island II', link: '#' },
  { cover: 'nes_games/nes_covers/Adventure of lolo 2.png', title: 'Adventures of Lolo 2', link: '#' },
  { cover: 'nes_games/nes_covers/Adventure of lolo 3.png', title: 'Adventures of Lolo 3', link: '#' },
  { cover: 'nes_games/nes_covers/Bad Dudes.png', title: 'Bad Dudes', link: '#' },
  { cover: 'nes_games/nes_covers/Baseball Stars.png', title: 'Baseball Stars', link: '#' },
  { cover: 'nes_games/nes_covers/Battel of Olympus.png', title: 'The Battle of Olympus', link: '#' },
  { cover: 'nes_games/nes_covers/Bomberman II (USA).png', title: 'Bomberman II', link: '#' },
  { cover: 'nes_games/nes_covers/Captain America and the Avengers.png', title: 'Captain America and the Avengers', link: '#' },
  { cover: 'nes_games/nes_covers/Chip \'n Dale Rescue Rangers 2.png', title: 'Chip \'n Dale Rescue Rangers 2', link: '#' },
  { cover: 'nes_games/nes_covers/Clu Clu Land.png', title: 'Clu Clu Land', link: '#' },
  { cover: 'nes_games/nes_covers/Contra.png', title: 'Contra', link: '#' },
  { cover: 'nes_games/nes_covers/Crash \'n\' the boys.png', title: 'Crash \'n the Boys - Street Challenge', link: '#' },
  { cover: 'nes_games/nes_covers/Darwing Duck.png', title: 'Darkwing Duck', link: '#' },
  { cover: 'nes_games/nes_covers/donkey kong.jpg', title: 'Donkey Kong', link: '#' },
  { cover: 'nes_games/nes_covers/Exitebike.png', title: 'Excitebike', link: '#' },
  { cover: 'nes_games/nes_covers/Ice Hocky.png', title: 'Ice Hockey', link: '#' },
  { cover: 'nes_games/nes_covers/Kickle Cubicle.png', title: 'Kickle Cubicle', link: '#' },
  { cover: 'nes_games/nes_covers/Legend of Zelda.png', title: 'The Legend of Zelda', link: '#' },
  { cover: 'nes_games/nes_covers/Zelda 2.png', title: 'Zelda 2 - The Adventure of Link', link: '#' },
  { cover: 'nes_games/nes_covers/Major League.png', title: 'Major League Baseball', link: '#' },
  { cover: 'nes_games/nes_covers/Metroid.png', title: 'Metroid', link: '#' },
  { cover: 'nes_games/nes_covers/Mike Tysons Punch-Out.png', title: 'Mike Tyson\'s Punch-Out!!', link: '#' },
  { cover: 'nes_games/nes_covers/StarTropics.png', title: 'StarTropics', link: '#' },
  { cover: 'nes_games/nes_covers/StarTropics 2.png', title: 'Zoda\'s Revenge - StarTropics II', link: '#' },
  { cover: 'nes_games/nes_covers/Super Mario Bros.png', title: 'Super Mario Bros', link: '#' },
  { cover: 'nes_games/nes_covers/Super Mario Bros 2.png', title: 'Super Mario Bros 2', link: '#' },
  { cover: 'nes_games/nes_covers/Super Mario Bros 3.png', title: 'Super Mario Bros 3', link: '#' },
  { cover: 'nes_games/nes_covers/Teemage Mutant.png', title: 'Teenage Mutant Ninja Turtles III - The Manhattan Project', link: '#' },
  { cover: 'nes_games/nes_covers/Tetris.png', title: 'Tetris', link: '#' },
  { cover: 'nes_games/nes_covers/Town & Country.png', title: 'Town & Country Surf Designs - Wood & Water Rage', link: '#' },
  { cover: 'nes_games/nes_covers/Wario\'s Woods.png', title: 'Wario\'s Woods', link: '#' },
  { cover: 'nes_games/nes_covers/Wild Gunman.png', title: 'Wild Gunman', link: '#' },
  { cover: 'nes_games/nes_covers/Wrecking Crew.png', title: 'Wrecking Crew', link: '#' },
  
];


const container = document.getElementById('nesContainer');

games.forEach(game => {
  const gameDiv = document.createElement('div');
  gameDiv.classList.add('nes');

  gameDiv.innerHTML = `
    <img src="${game.cover}" alt="${game.title}" class="nes-cover">
    <h2>${game.title}</h2>
    <p>Platform: NES</p>
    <p><a href="${game.link}">Download</a></p>
  `;

  container.appendChild(gameDiv);
});
