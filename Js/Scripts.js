let pokemonList = [
    {
        name: "Pikachu ",
        height: 2,
        types: ["electric"]
    },
    {
        name: "Charmander ",
        height: 6,
        types: ["fire"]
    },
    {
        name: "Squirtle",
        height: 5,
        types: ["water"]
    }
];

console.log(pokemonList);


for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i];
    
    document.write(`${pokemon.name} (height: ${pokemon.height})`);
    
    if (pokemon.height > 5) { 
        document.write(" - Wow, that's big!"); 
    }
}