const hero = require("superheroes");

const namaHero = hero.random();

console.log("Random Nama Hero : ", namaHero, "\n\n============\n");

console.log("Random 10 Hero : ");
for(let i=0; i<10; i++){
  console.log("- ", hero.random());
}