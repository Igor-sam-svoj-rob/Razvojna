"use-strict";

Handlebars.registerHelper("indexPLusOne", function (options) {
  return options.data.index + 1;
});

fetch("https://pokeapi.co/api/v2/pokemon-color/yellow")
  .then((response) => response.json())
  .then((data) => {
    const source = document.getElementById("pokemon-list").innerHTML;
    const template = Handlebars.compile(source);
    const contekst = { pokemon: data.pokemon_species };
    const html = template(contekst);
    document.getElementById("result").innerHTML = html;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
