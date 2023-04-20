/** Part for the starting instanciation */
/** creating the hero Heracles */
const heracles = new Hero("👨 Heracles", 20, 6, "./images/heracles.svg", 4, 4);

/** Creating his weapon and associating it */
const weapon = new Weapon("sword", 10, "./images/sword.svg");
heracles.weapon = weapon;

/** Creating his shield and associating it */
const shield = new Shield("shield", 10, "./images/shield.svg");
heracles.shield = shield;

/** Creating all of his adversaries */
const bird1 = new Monster("Bird", 25, 12, "./images/bird.svg", 4, 3);
const bird2 = new Monster("Bird", 25, 12, "./images/bird.svg", 3, 4);
const bird3 = new Monster("Bird", 25, 12, "./images/bird.svg", 4, 5);

const arena1 = new Arena([bird1, bird2, bird3], heracles);
console.log(arena1);
/** Creating the hero section in the html */

const ArenaHTML = new ArenaTemplate("arena");
ArenaHTML.createArena(arena1);
/** Creating the hero section in the html */
const fighterHtml = new FightersTemplate("fighters");
fighterHtml.createTemplate(heracles, bird1);

/** Your code goes here */

/** Do not touch => allow the opening / closing of the hero information section */
let openingModal = true;
const openModal = () => {
  if (openingModal) {
    const heroInfo = new HeroInfoTemplate("heroInfo");
    heroInfo.createHeroInfoTemplate(heracles);
    document.getElementById("heroInfo").style.display = "flex";
    openingModal = false;
  }
};

const closeModal = () => {
  const heroInfo = document.getElementById("heroInfo");
  heroInfo.style.display = "none";
  heroInfo.innerHTML = "";
  openingModal = true;
};
