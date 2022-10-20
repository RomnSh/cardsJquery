$(document).ready(function() {

    $.getJSON('assets/cardModel.json', function(data) {
        
        $.each(data, function(i, valye) {
            $('.row').append ('<div class="col col-6 col-md-4" ></div>');
            $('.col').eq(i).append(`<div class="cardTitle">${this.cardName.toUpperCase()}</div>`);
            $('.cardTitle').eq(i).append('<i class="btn bi bi-x-square-fill"></i>');
            $('.col').eq(i).append(`<img class="img-thumbnail"></img>`);
            $('.img-thumbnail').eq(i).attr('src', this.cardImgUrl);
            $('.col').eq(i).append(`<div>${this.cardDescription}</div>`);
        })

        $("i").click(function () { 
        $(this).parent('div').parent('div').remove();
        });
    });
});
