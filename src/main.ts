interface Band {
  name: string;
  year: number;
  active: boolean;
  genre: string;
}

let genreRock: string = "🎸 Rock"
let genreClassic: string = "🎼 Clásica"
let genreHardRock: string = "🤘 Hard Rock"
let genrePopRock: string = "🎵 Pop Rock"

const styles: string = "background-color: green; font-size: 20px; font-weight: bold; color: white; padding: 2px"

const banda1: Band = {
  name: "The Beatles",
  year: 1960,
  active: true,
  genre: genrePopRock,
};

const banda2: Band = {
    name: "Queen",
    year: 1970,
    active: false,
    genre: "🎸 Rock",
  };

  const banda3: Band = {
    name: "AC DC",
    year: 1973,
    active: true,
    genre: genreHardRock,
  };

  const banda4: Band = {
    name: "Ludwig van Beethoven",
    year: 1770,
    active: false,
    genre: genreClassic,
  };

  const banda5: Band = {
    name: "The Rolling Stones",
    year: 1962,
    active: true,
    genre: genreRock,
  };

  console.log(`%c${banda1.name}`, styles, `/ ${banda1.year} / ${banda1.active} / ${banda1.genre}`)
  console.log(`%c${banda2.name}`, styles, `/ ${banda2.year} / ${banda2.active} / ${banda2.genre}`)
  console.log(`%c${banda3.name}`, styles, `/ ${banda3.year} / ${banda3.active} / ${banda3.genre}`)
  console.log(`%c${banda4.name}`, styles, `/ ${banda4.year} / ${banda4.active} / ${banda4.genre}`)
  console.log(`%c${banda5.name}`, styles, `/ ${banda5.year} / ${banda5.active} / ${banda5.genre}`)
