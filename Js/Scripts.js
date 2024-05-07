



let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;
        return fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(details) {
                // Assigning details to the Pokémon object
                pokemon.imgUrl = details.sprites.front_default;
                pokemon.height = details.height;
                pokemon.imgUrlFront = details.sprites.front_default;
                pokemon.imgUrlBack = details.sprites.back_default;
            })
            .catch(function(e) {
                console.error(e);
            });
    }

    function addListItem(pokemon) {
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
        listItem.appendChild(button);

        let imgFront = document.createElement('img');
        imgFront.src = pokemon.imgUrlFront;
        imgFront.classList.add('pokemon-image');
        listItem.appendChild(imgFront);

        let imgBack = document.createElement('img');
        imgBack.src = pokemon.imgUrlBack;
        imgBack.classList.add('pokemon-image');
        listItem.appendChild(imgBack);

        document.querySelector('.pokemon-list').appendChild(listItem);

        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                json.results.forEach(function(item) {
                    // Create a Pokémon object and add it to the list
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    add(pokemon);
                });
            })
            .catch(function(e) {
                console.error(e);
            });
    }

    function showDetails(pokemon) {
        // Call loadDetails to fetch more details
        loadDetails(pokemon).then(function() {
            console.log(pokemon);
        });
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

// Load the list and then add list items
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});


