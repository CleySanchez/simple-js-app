// Wrap pokemonRepository array in an IIFE to avoid global state access
let pokemonRepository = (function() {
    // Initialize an empty array to store Pokémon objects
    let pokemonList = [
        {
            name: "Pikachu",
            height: 2,
            types: ["electric"]
        },
        {
            name: "Charmander",
            height: 6,
            types: ["fire"]
        },
        {
            name: "Squirtle",
            height: 5,
            types: ["water"]
        }
    ];

    // Public functions to access and modify the pokemonList array
    return {
        getAll: function() {
            return pokemonList;
        },
        add: function(pokemon) {
            pokemonList.push(pokemon);
        },
        addListItem: function(pokemon) {
            // Create a button for each Pokemon
            const button = document.createElement('button');
            button.innerText = pokemon.name;
            document.body.appendChild(button);

            // Add event listener to each button
            button.addEventListener('click', function() {
                showDetails(pokemon);
            });
        }
    };
})();

// Function to print a message
function printMessage() {
    document.write("<p>CATCH THEM ALL !!!</p>");
}

// Call the printMessage function
printMessage();

// Function to show Pokemon details
function showDetails(pokemon) {
    console.log(pokemon);
}

// Use a forEach() loop to iterate over the Pokémon in the pokemonList array and print their details
pokemonRepository.getAll().forEach(function(pokemon) {
    // Call addListItem function for each Pokemon
    pokemonRepository.addListItem(pokemon);
});
