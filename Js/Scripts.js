(function() {
  const modalContainer = document.querySelector('#modal-container');
  const modal = document.querySelector('#modal');
  const modalClose = document.querySelector('#modal-close');
  const modalTitle = document.querySelector('#modal-title');
  const modalText = document.querySelector('#modal-text');

  function showModal(title, text) {
    modalTitle.textContent = title;
    modalText.innerHTML = text;
    // // modalContainer.style.display = 'flex';
  }

  function hideModal() {
    modalContainer.style.display = 'none';
  }

  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalContainer.style.display === 'flex') {
      hideModal();
    }
  });

 

  modalContainer.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
      hideModal();
    }
  });

 modalClose.addEventListener('click', hideModal);

  let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

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
      } catch (error) {
        console.error(error);
      }
    }

    function addListItem(pokemon) {
      let listItem = document.createElement('li');
  
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('pokemon-button');
      listItem.appendChild(button);

      document.querySelector('.pokemon-list').appendChild(listItem);

      button.addEventListener('click', function() {
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
            detailsUrl: item.url
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
      `;
      showModal(pokemon.name.toUpperCase(), modalContent);
    }

    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      loadDetails: loadDetails,
      addListItem: addListItem,
      showDetails: showDetails
    };
  })();

  // Load the list and add list items
  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
      
    });
  });

})();

