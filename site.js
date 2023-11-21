let url = 'https://pokeapi.co/api/v2/pokemon/';
 
url = url += input;
 
async function buscandoPokemon(url_api) {
    fetch(url_api, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(pok => {
        nome_pok = pok.abilities[0].ability.name;
        console.log(nome_pok);
    })
    .catch(err => {
        console.log(err);
    })
}
 
buscandoPokemon(url);