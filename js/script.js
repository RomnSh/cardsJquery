$(document).ready(function() {

    $('.btn-add').click(function(){
        let pokemonName = $('.form-control').val().toLowerCase()
        console.log(pokemonName);
 
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, function(pokemonCard) {
            $('.row').append ('<div class="col col-6 col-md-4" ></div>');
            $('.col').last().append(`<div class="cardTitle">${pokemonCard.name.toUpperCase()}</div>`);
            $('.cardTitle').last().append('<i class="btn bi bi-x-square-fill"></i>');
            $('.col').last().append(`<img class="img-thumbnail"></img>`);
            $('.img-thumbnail').last().attr('src',pokemonCard.sprites.other.dream_world.front_default);
            pokemonCard.abilities.forEach((i) => {$('.col').last().append(`<div>${i.ability.name}</div>`)}); 
            
        })

        .fail(function() {
            alert('Incorrect name. No Pokemon found with that name');
          });
    })
    
     $('.row').click(function(btnDell){
         if(btnDell.target.tagName === "I") {
            $(btnDell.target.parentElement.parentElement).remove()
         }      
     }) 

});
