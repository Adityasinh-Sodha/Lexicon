const games = [
  { cover: 'psp_cover/Ace Combate Joint Assault.png', title: 'Ace Combate Joint Assault', link: 'https://mega.nz/file/Zj8X1BLY#hN_q-HdvS5SRBb0DlTuHDVQAIAv_xkyLaXb9mMUsIOs' },
  { cover: 'psp_cover/Ace Combate X Skies of Deception.png', title: 'Ace Combate X - Skies of Deception', link: 'https://mega.nz/file/k7FSHQwb#zRsic_3XvCpszbk0pOJm_Dx7cgQd2yJ2kVJ9f3Zu_zc' },
  { cover: "psp_cover/Assassin's Creed Bloodlines.png", title: "Assassin's Creed Bloodlines", link: "https://mega.nz/file/5i0hmJoC#ix5jvSXrZ-Lq8svI-eLRuzTsPNPdGNTVdW1zgt_aIEY" },
  { cover: 'psp_cover/Ben 10 Protector of Earth.jpg', title: 'Ben 10 Protector of Earth', link: 'https://mega.nz/file/t2tiSIDR#guh0rg1TC3gn1jkTm550-1nOCWoSLpu6B_CJPhlaJrw' },
  { cover: 'psp_cover/Ben 10 Alien Force.png', title: 'Ben 10 Alien Force', link: 'https://mega.nz/file/Nml0Sbxb#vtTsfdziuIjcka9Ej3tbPOtDwhrxYLt1SyEWtDQd_Gc' },
  { cover: 'psp_cover/Ben 10 Alien Force Vilgax Attacks.jpg', title: 'Ben 10 Alien Force: Vilgax Attacks', link: 'https://mega.nz/file/lyNCBKDQ#7F9MLkFFRAq7BBFB5fM6d-uL-fX7Q9Oevw2bl92Qzqk' },
  { cover: 'psp_cover/Ben 10 Ultimate Alien Cosmic Destruction.png', title: 'Ben 10: Ultimate Alien - Cosmic Destruction', link: 'https://mega.nz/file/xqFRCS7Z#-volWkY9pqBQ5Il7gXqgnASg0Qq7ctD0jpTm6dVDK0M' },
  { cover: 'psp_cover/Call of Duty Roads to Victory.jpg', title: 'Call of Duty: Roads to Victory', link: 'https://mega.nz/file/culUESpT#aUgiiF1m3VXa6Zsgf6YUdkSCMCBjSdWXU62KnGOE2p4' },
  { cover: 'psp_cover/Creash of Titens.png', title: 'Crash of the Titans', link: 'https://mega.nz/file/U7FRRZwA#-28RCVD_hpZv6cZR-O4AErjxQOD7zEh8VMgMneRP2t4' },
  { cover: 'psp_cover/Creash Teg Team Racing.png', title: 'Crash Tag Team Racing', link: 'https://mega.nz/file/Uz93yZRT#Bb497GlIQOMzexupM9K95tLUvORj1I9N3KxP86YXJWM' },
  { cover: 'psp_cover/Dragon ball Z.png', title: 'Dragon Ball Z: Shin Budokai 2', link: 'https://mega.nz/file/oyEGRZ6R#JpWuLJXGEeMeJPjAeusWEoDQnFhl-05K3hVzBkQdsm4' },
  { cover: 'psp_cover/Dragon Ball Z  Shin Budokai 2.png', title: 'Dragon Ball Z: Shin Budokai 2', link: 'https://mega.nz/file/YvMU1aJT#D_8211KvyhEsHcUiPEf8dsrNm55hF_FlZBIYmnBbSsc' },
  { cover: 'psp_cover/Dragon Ball Z  Shin Budokai Another Road.png', title: 'Dragon Ball Z: Shin Budokai - Another Road', link: 'https://mega.nz/file/82000SjB#ncMz2jYr2Tl_b5vvGu0UVpW011RFHCzYXU1MASPPupw' },
  { cover: 'psp_cover/Dragon Ball Z Tenkaichi Tag Team.jpg', title: 'Dragon Ball Z: Tenkaichi Tag Team', link: '#' },
  { cover: 'psp_cover/Exit.png', title: 'Exit', link: 'https://mega.nz/file/Z71ghDpB#iasID0-po2Z1YSMsvc270Lr6cRo0v1hOa5nFxFEYvGI' },
  { cover: 'psp_cover/F1 2009.png', title: 'F1 2009', link: 'https://mega.nz/file/VyVEBaqB#pFSB38VVsjbEOhNq5pfFOcO4r6JZnuFmTHgjcUD6zLg' },
  { cover: 'psp_cover/Gran Turismo.jpg', title: 'Gran Turismo', link: 'https://mega.nz/file/ArEj0TCa#81vxL5fOGm5v3Esh2VFeL6UXrUfwZHozfJ_PQUseoJI' },
  { cover: 'psp_cover/GTA Vice City Stories.png', title: 'GTA: Vice City Stories', link: 'https://mega.nz/file/l7cQXLZI#G98E0GLXUAH9pYcD_yb2OgS6M4NStNidRTfWBMQdsOs' },
  { cover: 'psp_cover/Gun Showdown.jpg', title: 'Gun Showdown', link: 'https://mega.nz/file/cjdxhaRB#YVAIG467K_N9dz_K6kIxxwxRUmdKAG5UP7veHxOROnw' },
  { cover: 'psp_cover/Infected.jpg', title: 'Infected', link: 'https://mega.nz/file/o2URGBbJ#hrPkgc_SZQtEhVx04gKHOXbXdQw-RSmHUx8H7G3tnGc' },
  { cover: 'psp_cover/Killzone Liberation.png', title: 'Killzone: Liberation', link: 'https://mega.nz/file/YqFTULaS#bgWyEBwAVD2pV11SHr375tJLsOBvhPDk4CGdMGCerTE' },
  { cover: 'psp_cover/Medal of Honor Heroes 2.jpg', title: 'Medal of Honor: Heroes 2', link: 'https://mega.nz/file/IndAmIhB#DLlxxhR2Ig47EPegKsi9md2BC3C6syEJXizPOF5VJSU' },
  { cover: 'psp_cover/Medal of Honor Heroes.png', title: 'Medal of Honor: Heroes', link: 'https://mega.nz/file/NrshAZwa#3Gsiy-hB5P1vQ-W9xr88zzbLWkytTUj4BubacmRcIxw' },
  { cover: 'psp_cover/Metel Gear Solid Peace Walker.png', title: 'Metal Gear Solid: Peace Walker', link: 'https://mega.nz/file/d71WGDqA#D--EzinMy7ovojJHVrAOY-pYcn7EI9LTwiIXhqv8XW8' },
  { cover: 'psp_cover/Need For Speed Most Wanted.jpg', title: 'Need For Speed: Most Wanted', link: 'https://mega.nz/file/UiFATZbS#-4CWG20Jz-WzjjW_lmcJGm63SfJpLpUPsoUdHGbUIGI' },
  { cover: 'psp_cover/Need For Speed ProStreet.png', title: 'Need For Speed: ProStreet', link: 'https://mega.nz/file/839wkR7Y#di6vrgNVAtnVz4lA0jV6uCK1xTNejHtBDdV6X3RyPCE' },
  { cover: 'psp_cover/WWE All Stars.jpg', title: 'WWE All Stars', link: 'https://mega.nz/file/RqFXDTSQ#yyEjRduMzaMXrV0n-ycTNIg7ZNva8QSqRI_I4Zl8tuA' },
  { cover: 'psp_cover/WWE SmackDown vs. Raw 2010.jpg', title: 'WWE SmackDown vs. Raw 2010', link: 'https://mega.nz/file/cnlxlICZ#NqyXNeoLVACrzfuHwgNn70uUE9B9UZNPcPHTHxCgQ9s' },
  { cover: 'psp_cover/WWE SmackDown vs. Raw 2011.png', title: 'WWE SmackDown vs. Raw 2011', link: 'https://mega.nz/file/F21RgKqA#y7fQFLRdCgYoKxN-1rWQuBhL3Av5mED31rL3eIQ' }
];


const container = document.getElementById('romsContainer');

games.forEach(game => {
  const gameDiv = document.createElement('div');
  gameDiv.classList.add('roms');

  gameDiv.innerHTML = `
    <img src="${game.cover}" alt="${game.title}" class="roms-cover">
    <h2>${game.title}</h2>
    <p>Platform: PSP</p>
    <p><a href="${game.link}">Download</a></p>
  `;

  container.appendChild(gameDiv);
});
