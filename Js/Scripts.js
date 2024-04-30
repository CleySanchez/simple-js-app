// Wrap pokemonList array in an IIFE to avoid global state access
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
        }
    };
})();

// Use a forEach() loop to iterate over the Pokémon in the pokemonList array and print their details
pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(`${pokemon.name} (height: ${pokemon.height})`);
    if (pokemon.height > 5) { 
        document.write(" - Wow, that's big!"); 
    }
});

// Function to print a message
function printMessage() {
    document.write("<p>CATCH THEM ALL !!!</p>");
}

// Call the printMessage function
printMessage();

