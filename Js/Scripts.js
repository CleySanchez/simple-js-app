let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

        let img = document.createElement('img');
        img.classList.add('pokemon-image');
        listItem.appendChild(img);

        document.querySelector('.pokemon-list').appendChild(listItem);

        button.addEventListener('click', function() {
            showDetails(pokemon, listItem);
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

    async function showDetails(pokemon, listItem) {
        await loadDetails(pokemon);
        let img = listItem.querySelector('.pokemon-image');
        img.src = pokemon.imgUrl;
        console.log(pokemon);
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

// Chargez la liste puis ajoutez les éléments de liste
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
