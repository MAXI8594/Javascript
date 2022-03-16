const axios = require("axios");
const fs = require('fs').promises;
const path = require('path');

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results },
  } = response;
  let characters = results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
      };
    })
  let headers = Object.keys(characters.shift()).join(',');
  let personajes = characters
    .map((personaje) => Object.values(personaje).join(","))
    .join ("\n");

  await fs.writeFile(path.join(__dirname, "data.csv"), headers + '\n' + personajes);
  //console.log(path.join(__dirname, "data.csv"));
  console.log(headers + '\n' + personajes);
};

main();