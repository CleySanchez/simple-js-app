(function () {
  const modal = document.querySelector("#pokemon-modal");

  function showModal(title, text) {
    modal.querySelector(".modal-title").innerHTML = title; // Set the title dynamically
    modal.querySelector(".modal-body").innerHTML = text;
    modal.classList.add("show");
    modal.style.display = "block";
  }

  function hideModal() {
    modal.classList.remove("show");
  }

  // Function to display Pokemon type
  function showType(types) {
    let typeList = "<p>Type(s): ";
    types.forEach((type) => {
      typeList += `${type.type.name} `;
    });
    typeList += "</p>";
    return typeList;
  }

  // Function to assign colors to buttons based on types
  function assignButtonColors() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      const type = button.textContent.trim();
      switch (type) {
        case "Water":
          button.classList.add("btn-primary");
          break;
        case "Rock":
          button.classList.add("btn-secondary");
          break;
        case "Grass":
          button.classList.add("btn-success");
          break;
        case "Fire":
          button.classList.add("btn-danger");
          break;
        case "Electric":
          button.classList.add("btn-warning");
          break;
        case "Normal":
          button.classList.add("btn-info");
          break;
        case "Flying":
          button.classList.add("btn-light");
          break;
        case "Poison":
          button.classList.add("btn-dark");
          break;
        case "Link":
          button.classList.add("btn-link");
          break;
        default:
          button.classList.add("btn-primary");
      }
    });
  }

  let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=152";

    async function add(pokemon) {
      pokemonList.push(pokemon);
    }

    function getAll() {
      return pokemonList;
    }

    async function loadDetails(pokemon) {
      let url = pokemon.detailsUrl;
      try {
        const response = await fetch(url);
        const details = await response.json();
        pokemon.imgUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types; // Add types to the Pokemon object
      } catch (error) {
        console.error(error);
      }
    }

    function addListItem(pokemon) {
      let listItem = document.createElement("li");

      const button = `<button type="button" id="pok-${pokemon.name}" class="col-md-4 mb-3 btn" data-bs-toggle="modal" data-bs-target="#pokemon-modal">
                       ${pokemon.name}        
                    </button>`;
      listItem.innerHTML = button;
      document.querySelector(".pokemon-list").appendChild(listItem);
      document
        .querySelector(`#pok-${pokemon.name}`)
        .addEventListener("click", function () {
          showDetails(pokemon);
        });
    }

    async function loadList() {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        for (const item of json.results) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          await add(pokemon);
        }
      } catch (error) {
        console.error(error);
      }
    }

    async function showDetails(pokemon) {
      await loadDetails(pokemon);

      let modalContent = `
        <img src="${pokemon.imgUrl}" alt="${pokemon.name}" class="pokemon-image">
        <p>Height: ${pokemon.height}</p>
        ${showType(pokemon.types)} <!-- Display Pokemon type -->
      `;
      showModal(pokemon.name, modalContent); // Pass Pokémon name as title
    }

    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      loadDetails: loadDetails,
      addListItem: addListItem,
      showDetails: showDetails,
    };
  })();

  // Load the list and add list items
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
    assignButtonColors(); // Call function to assign colors after loading list
  });
})();
