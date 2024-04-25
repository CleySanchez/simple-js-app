let pokemonList = [
    {
        name: "Pikachu",
        height: 4,
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

console.log(pokemonList);

const threshold = 1.0;
for (let i = 0; i < pokemonList.length; i++) {
   
    let pokemon = pokemonList[i];
    

    document.write(`${pokemon.name} (height: ${pokemon.height})`);

    if (pokemon.height > threshold) {
        
        document.write(` - Wow, that's big!`);
    }
}
