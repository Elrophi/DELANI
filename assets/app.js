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

$(document).ready(function(){
    $('#one').mouseover(function(){
        $('#lay1').show()
    }).mouseout(function(){
        $('#lay1').hide() 
     });
});

$(document).ready(function(){
    $('#two').mouseover(function(){
        $('#lay2').show();
    }).mouseout(function(){
        $('#lay2').hide();
    });
});

$(document).ready(function(){
    $('#three').mouseover(function(){
        $('#lay3').show();
    }).mouseout(function(){
        $('#lay3').hide();
    });
});

$(document).ready(function(){
    $('#four').mouseover(function(){
        $('#lay4').show();
    }).mouseout(function(){
        $('#lay4').hide();
    });
});

$(document).ready(function(){
    $('#five').mouseover(function(){
        $('#lay5').show();
    }).mouseout(function(){
        $('#lay5').hide();
    });
});

$(document).ready(function(){
    $('#six').mouseover(function(){
        $('#lay6').show();
    }).mouseout(function(){
        $('#lay6').hide();
    });
});

$(document).ready(function(){
    $('#seven').mouseover(function(){
        $('#lay7').show();
    }).mouseout(function(){
        $('#lay7').hide();
    });
});

$(document).ready(function(){
    $('#eight').mouseover(function(){
        $('#lay8').show();
    }).mouseout(function(){
        $('#lay8').hide();
    });
});


function formMessage(){
    if(document.getElementById('mce-FNAME').value=="")
    alert("please fill in the blanks! Thank you......");
    else{
        alert("Thank you for filling! You are now subscribed")
    }
}

