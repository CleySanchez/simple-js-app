(function() {
    let modalContainer = document.querySelector('#modal-container');
  
    function showModal(title, content) {
      modalContainer.innerHTML = ''; // Clear existing modal content
  
      let modal = document.createElement('div');
      modal.classList.add('modal');
  
      let closeButton = document.createElement('button');
      closeButton.classList.add('modal-close');
      closeButton.innerText = 'Close';
      closeButton.addEventListener('click', hideModal);
  
      let modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');
      modalContent.innerHTML = content;
  
      modal.appendChild(closeButton);
      modal.appendChild(modalContent);
      modalContainer.appendChild(modal);
  
      modalContainer.classList.add('is-visible');
    }
  
    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }
  
    window.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });
  
    modalContainer.addEventListener('click', function(e) {
      if (e.target === modalContainer) {
        hideModal();
      }
    });
  
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
          <h1>${pokemon.name}</h1>
          <img src="${pokemon.imgUrl}" alt="${pokemon.name}">
          <p>Height: ${pokemon.height}</p>
        `;
        showModal('Pokemon Details', modalContent);
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
  