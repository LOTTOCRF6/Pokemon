let base_URL = "https://pokeapi.co/api/v2/pokemon/";

// Function to fetch a list of pokemon
function getPokemonList(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Get the list of pokemon from the results
      let pokemon = data.results;
      // Get element from HTML to write buttons in
      let container = document.querySelector(".pokemon-list-container");
      container.innerHTML = "";
      pokemon.forEach((btn) => {
        container.innerHTML += `<button onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });
      // next pokemon button
      container.innerHTML += `<br><br><button onclick="getPokemonList('${data.next}')">Next</button>`;
      // Previous pokemon button
      container.innerHTML += `<br><br><button onclick="getPokemonList('${data.previous}')">Previous</button>`;
    });
}

// Get default pokemon list
getPokemonList(base_URL);

// Function to get information about a specific pokemin
function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".pokemon-info").innerHTML = `
    <img src="${data.sprites.other.dream_world.front_default} ">
    `;
      document.querySelector(
        ".pokemon-info"
      ).innerHTML += `<p>Name: ${data.name}</p>`;
      document.querySelector(".pokemon-info").innerHTML += `<p>Type: ${data.types[0].type.name}</p>`;
      document.querySelector(
        ".pokemon-info"
      ).innerHTML += `<p>Weight: ${data.weight}</p>`;
      document.querySelector(".pokemon-info").innerHTML += `<p>Height: ${data.height}</p>`;
    });
}
