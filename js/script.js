$(document).ready(function() {
    const pokemonList = []
     $('.btn-add').click(function (){
        let pokemonName = $('.form-control').val().trim().toLowerCase()
        
       if (pokemonName) {
            const pokemonExist = pokemonList.includes(pokemonName)
            // check uniqueness
            if (pokemonExist) {
                alert ('Such a card already exists')
            } else {
                // parseJson
                $.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, function(pokemon) {
                    pokemonList.push(pokemon.name)
                    // pokemonData.push(pokemon)
                })
                
                // create a card
                .done (function(pokemonCard){
                    $('.row').append ('<div class="col col-6 col-md-4" ></div>');
                    $('.col').last().append(`<div class="cardTitle">${pokemonCard.name}</div>`);
                    $('.cardTitle').last().append('<i class="btn bi bi-x-square-fill"></i>');
                })

                // create a image card
                .done (function(pokemonCard){
                    $('.col').last(pokemonCard).append(`<img class="img-thumbnail"></img>`);
                    $('.img-thumbnail').last().attr('src',pokemonCard.sprites.other.dream_world.front_default);
                })
                
                // create a abilities card  
                .done (function(pokemonCard){
                    pokemonCard.abilities.forEach((i) => {$('.col').last().append(`<div>${i.ability.name}</div>`)});
                })  
                
                // wrong name
                .fail(function() {
                    alert('Incorrect name. No Pokemon found with that name');
                });
                
            }
        }
    })  

    // remove the card
    $('.row').click(function(cardDelete){
        if(cardDelete.target.tagName === "I") {
           $(cardDelete.target.parentElement.parentElement).remove()
        }
        function removePokemonFromList(pokemonList, name) {
            let index = pokemonList.indexOf(name);
            if (index > -1) {
                pokemonList.splice(index, 1);
            }
            return pokemonList;
        }
        removePokemonFromList(pokemonList, cardDelete.target.parentElement.innerText)
    })                      
})