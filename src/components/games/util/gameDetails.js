import asteroidz3d from "../images/asteroidz3d.jpg";
import threesixty from "../images/threesixty.jpg";
import threedeeracing from "../images/threedeeracing.jpg";
import yambo from "../images/yambo.jpg";
import houseofusher from "../images/houseofusher.jpg";
import ufo from "../images/ufo.jpg";
import bricks from "../images/bricks.jpg";
import blocks from "../images/blocks.jpg";
import camy from "../images/camy.jpg";
import capman from "../images/capman.jpg";
import colormagic from "../images/colormagic.jpg";
import cybermind from "../images/cybermind.jpg";
import cobjacks from "../images/cobjacks.jpg";
import crystalstacker from "../images/crystalstacker.jpg";
import dolphindice from "../images/dolphindice.jpg";
import depthdiver from "../images/depthdiver.jpg";
import deluxepacman from "../images/deluxepacman.jpg";
import drhorst from "../images/drhorst.jpg";
import drops from "../images/drops.jpg";
import lordmonarch from "../images/lordmonarch.jpg";
import darkwars from "../images/darkwars.jpg";
import dxball from "../images/dxball.jpg";
import driftzone from "../images/driftzone.jpg";

const gameDetails = [
  {
    title: "Super Methane Bros",
    genre: "Platformer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Supermethanebrothers_title.gif",
    gameLink:
      "https://mega.nz/file/mh5gmQpJ#tadL2EG05MVTgVLIlb62rT8ia05ZV5sVMchn_-Cevx8",
  },
  {
    title: "Asteroidz3D",
    genre: "Shooter",
    image: asteroidz3d,
    gameLink:
      "https://mega.nz/file/f5YwkTrC#C9tmlwKGryRxEQjHcP6fJjWG4XQ7gPxpM83eVZmYM0g",
  },
  {
    title: "360",
    genre: "Shooter",
    image: threesixty,
    gameLink:
      "https://mega.nz/file/2tw2wYZQ#xuMkGcBC4qyQd1oX4fYacFiZfoBmH4szy0ExQ588HjI",
  },
  {
    title: "3D Racing",
    genre: "Racing",
    image: threedeeracing,
    gameLink:
      "https://mega.nz/file/bhgHSC5D#u4Az5UBQ7JqPLqGD8HnvzzR0tQEH-Q2luwGyWK2UdoQ",
  },
  {
    title: "Aba Daba",
    genre: "Puzzle",
    image:
      "https://www.giantbomb.com/a/uploads/scale_small/15/157771/2309447-abdb3.png",
    gameLink:
      "https://mega.nz/file/q1ZCgJYB#EeFzwVunmy2z3iYr8007RmSIdcdhNyCEH-ep6THa1Z0",
  },
  {
    title: "Codex",
    genre: "Puzzle",
    image:
      "https://ia600300.us.archive.org/5/items/Codex_1020/resource_item_3257.png",
    gameLink:
      "https://mega.nz/file/GkQQWJLJ#pTUnEzgokH2O0m3mGk9zIfCnK2WjcubiSkw2iO673wk",
  },
  {
    title: "Tetris Break",
    genre: "Puzzle",
    image:
      "https://ia600700.us.archive.org/17/items/TetrisBreak_1020/resource_item_3307.png",
    gameLink:
      "https://mega.nz/file/69YSyZyR#RXS8-pUTsd8UcMXYwLP66P3_SlNPndsOlNQPcR_4XTc",
  },
  {
    title: "Yambo",
    genre: "Board Game",
    image: yambo,
    gameLink:
      "https://mega.nz/file/O5Jy1ZDJ#iDFgaWXrPuAMbUbXJabzvROxvDP6DseAgdmphc5yl2Q",
  },
  {
    title: "Power Shooter",
    genre: "Shooter",
    image:
      "https://ia800205.us.archive.org/23/items/1569Powershooter/Clipboard-20160224.png",
    gameLink:
      "https://mega.nz/file/3hQCVDTL#vAFMzfLQcUYZLOZrg8oAshomD36G8cqpDvp4lat6LEw",
  },
  {
    title: "House of Usher",
    genre: "Platformer",
    image: houseofusher,
    gameLink:
      "https://mega.nz/file/e0pWkApD#7iysW-fgMSWX1ThVnzeVMwYP-4EMhbSLc4dIq1hxCzA",
  },
  {
    title: "UFO",
    genre: "Shooter",
    image: ufo,
    gameLink:
      "https://mega.nz/file/igJ22DAB#ou8DDd6R6KK35Ei7yjZh1Ci3OlYRTT6mwxjmL26Sny0",
  },
  {
    title: "Mario XP",
    genre: "Platformer",
    image: "https://ia801007.us.archive.org/17/items/marioxp/preview.png",
    gameLink:
      "https://mega.nz/file/CtZUVL5R#mP7fvcFG5Hucvu8ZJ2z3aepfh_CNS8TCcCjf9sEELmc",
  },
  {
    title: "Madness Interactive",
    genre: "Shooter",
    image:
      "https://games-cdn.softpedia.com/screenshots/Madness-Interactive_2.jpg",
    gameLink:
      "https://mega.nz/file/2tBQwD5a#UOgaenlmY6c4Ejou8IBgb4JhZNOT8mC3msl_5Gwr8T8",
  },
  {
    title: "Alex the Allegator 4",
    genre: "Platformer",
    image: "http://allegator.sourceforge.net/images/ss_alex4.gif",
    gameLink:
      "https://mega.nz/file/WxIWWTRY#Y9LC4MrTCqeNMXK-uRcQeD7EAAio1azmuJeku2jRRcA",
  },
  {
    title: "Absolute Mastermind",
    genre: "Puzzle",
    image: "https://img.informer.com/screenshots/64/64953_3.png",
    gameLink:
      "https://mega.nz/file/G5J0kZII#gP43BBZpkNBjEJi9Y-GwUb2evVkFhSQZ2cnGr3Vdua8",
  },
  {
    title: "Atoll",
    genre: "Puzzle",
    image: "https://s.uvlist.net/l/y2005/2/8365.jpg",
    gameLink:
      "https://mega.nz/file/OsIBiaqA#i-LDye_fWrtn2dPdUrkwDFReaCoEgkvmQ_jq07sa0bA",
  },
  {
    title: "Alizarin Tetris",
    genre: "Puzzle",
    image: "https://www.wkiri.com/projects/atris/Docs/Atris-FunShot.jpg",
    gameLink:
      "https://mega.nz/file/uspExIib#BMi2FqS4rBTr-C_6YmbzTG8wsJV6MD6oTd5qqIEAx2Y",
  },
  {
    title: "Bricks",
    genre: "Block Breaker",
    image: bricks,
    gameLink:
      "https://mega.nz/file/mtI22ZoS#D4b1cRC5COZwbFGxPlaPR5dMwNrFaW0QDEr6V7vNXkU",
  },
  {
    title: "BlackJack",
    genre: "Card Game",
    image: "http://www.saurin.net/images/blackjack.jpg",
    gameLink:
      "https://mega.nz/file/eoxwUJbD#scvMhDndtpYyUsTHjJmYVIflrKu5tGK1rywCPVdnPuo",
  },
  {
    title: "Blocks 2001",
    genre: "Platformer",
    image: blocks,
    gameLink:
      "https://mega.nz/file/LtpgyYrY#3AX8906jNw8wOcaBvCXd6bLyTj2a_4dPWYyTs3qOlPw",
  },
  {
    title: "Camy 2 - The Machine!",
    genre: "Platformer",
    image: camy,
    gameLink:
      "https://mega.nz/file/qtp00I7Z#ZCSePpM4dFIJly9TxHX6GvImSe6MTOROVyAGtFKpkUE",
  },
  {
    title: "Capman",
    genre: "Shooter",
    image: capman,
    gameLink:
      "https://mega.nz/file/fgpWla6L#gCQmzA7XdHmzjrWw-ljCaA9r3p7uSOTNRprp9yL8WNI",
  },
  {
    title: "Chicken Invaders",
    genre: "Shooter",
    image:
      "http://topfullgames.com/wp-content/uploads/2014/09/chicken-invaders-1.jpg",
    gameLink:
      "https://mega.nz/file/KkwAmATZ#ZBfoPDzA2HC0CR_YXOqOwCZGBUz9UPNv80sWvp1FHKE",
  },
  {
    title: "Color Magic",
    genre: "Puzzle",
    image: colormagic,
    gameLink:
      "https://mega.nz/file/bsh20bJb#yxwadIct7gPA4MN_JmF-CHVXb7ocEidUDsf4owsLZOk",
  },
  {
    title: "CyberMind",
    genre: "Puzzle",
    image: cybermind,
    gameLink:
      "https://mega.nz/file/i1B3jAYI#FwZs4nBTbZkedcQGayjebTb2OuMVRZO0ZiLilh6Sc5Y",
  },
  {
    title: "Cobjacks",
    genre: "Card Game",
    image: cobjacks,
    gameLink:
      "https://mega.nz/file/X9hSDDKR#3y4JBm9cj21UUwx1C8R66e1ZOhmE4HqnRMSl5xaVDuo",
  },
  {
    title: "Crystal Stacker",
    genre: "Puzzle",
    image: crystalstacker,
    gameLink:
      "https://mega.nz/file/f5IgGbBJ#ziazr1fnP-7fhVGIIoiELL9RosvkIyUNhBmwgwl9vk0",
  },
  {
    title: "Dolphin Dice 2000",
    genre: "Dice Game",
    image: dolphindice,
    gameLink:
      "https://mega.nz/file/ewA2ARTL#HrHt1wqFxooDVb2y140RNcFQqA4znVtxUg-udj7cHuQ",
  },
  {
    title: "Depth Diver",
    genre: "Action",
    image: depthdiver,
    gameLink:
      "https://mega.nz/file/yxRigbDb#sPHHGueBtUpasg3s9qWomlGrFDiPWVYtmLuyQE2aDlc",
  },
  {
    title: "Deluxe Pacman",
    genre: "Maze Game",
    image: deluxepacman,
    gameLink:
      "https://mega.nz/file/bgISFJrb#MHotUnh0fFvchYaAZ5tGS7QOnekP-JuQ4mWUK8MWfxE",
  },
  {
    title: "Dr Horst",
    genre: "Puzzle",
    image: drhorst,
    gameLink:
      "https://mega.nz/file/XoAEVTrQ#fYK0i1-0_xm24EjHao2CmyE05-rcBUrI5D_iS6p9phA",
  },
  {
    title: "Drops of Light",
    genre: "Puzzle",
    image: drops,
    gameLink:
      "https://mega.nz/file/r0ZSRbaT#Ik9_f3Dh6TIj_CYCIdl7dRnIwhpumge8StARLTjzNkY",
  },
  {
    title: "Lord Monarch Online",
    genre: "Strategy",
    image: lordmonarch,
    gameLink:
      "https://mega.nz/file/7hAmzBgC#71J3cfL08qCj820swd7wNuXXOt5uhmC-X5tiBFpjlXI",
  },
  {
    title: "Dark Wars",
    genre: "Shooter",
    image: darkwars,
    gameLink:
      "https://mega.nz/file/KlBzWKTK#ycjXcX88XYUZM8cFC-JK1q-RGPXqt_X7lvMUnHvMIwg",
  },
  {
    title: "DX-Ball",
    genre: "Block Breaker",
    image: dxball,
    gameLink:
      "https://mega.nz/file/HkowTLgR#9Vei5dQJkIz54P257ERUQMo1KsuaohwXc7NyGJvl1Jc",
  },
  {
    title: "Driftzone",
    genre: "Shooter",
    image: driftzone,
    gameLink:
      "https://mega.nz/file/W9ZjjAqY#-WQTafSPdE0W79vkBdTOyY76ZI0JOT0wZgBmTrPoPI4",
  },
];

export { gameDetails };
export default gameDetails;
