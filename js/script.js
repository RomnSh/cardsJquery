$(document).ready(function() {

    $('.btn-add').click(function (){
        let pokemonName = $('.form-control').val().trim().toLowerCase()
        
        // check uniqueness
        $('.cardTitle').each(function(i){
            if (($('.cardTitle')[i].innerText.toLowerCase()) === pokemonName){
            alert ('Such a card already exists')
            return pokemonName = null
            }
        })
        
        // parseJson
        $.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, function(pokemon) {
            let pokemonCard = pokemon;
            return pokemonCard;
        })

        // create a card
        .done (function(){
            $('.row').append ('<div class="col col-6 col-md-4" ></div>');
        })
        
        // create a title card
        .done (function(pokemonCard){
            $('.col').last().append(`<div class="cardTitle">${pokemonCard.name[0].toUpperCase()+pokemonCard.name.slice(1)}</div>`);
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
    })
    
    // remove the card
    $('.row').click(function(btnDell){
        if(btnDell.target.tagName === "I") {
           $(btnDell.target.parentElement.parentElement).remove()
        }      
    }) 

});
