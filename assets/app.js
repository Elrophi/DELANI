$(document).ready(function(){
    $('#design-text').hide();
    $('#design-image').click(function(){
        $('#design-image').slideDown('1500').hide('1000');
        $('#design-text').show('1500');
    });
    $('#design-text').click(function(){
        $('#design-text').slideUp('1500');
        $('#design-image').slideDown('1500');
    });
});

$(document).ready(function(){
    $('#dev-text').hide();
    $('#dev-image').click(function(){
        $('#dev-image').slideDown('1500').hide('1000');
        $('#dev-text').show('1500');
    });
    $('#dev-text').click(function(){
        $('#dev-text').slideUp('1500');
        $('#dev-image').slideDown('1500');
    });
});

$(document).ready(function(){
    $('#prod-text').hide();
    $('#prod-image').click(function(){
        $('#prod-image').slideDown('1500').hide('1000');
        $('#prod-text').show('1500');
    });
    $('#prod-text').click(function(){
        $('#prod-text').slideUp('1500');
        $('#prod-image').slideDown('1500');
    });
});