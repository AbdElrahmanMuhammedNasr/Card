$( ".Card" ).mouseenter(function() {
    $( ".Green" ).animate({
        width: '345px',
        height: '270px',
        top:'-7%',
        left:'21%'
    });
    
    $( ".Info" ).animate({opacity: '1'});
    $( ".container" ).animate({opacity: '1'});
    $( "img" ).css({transform: 'rotate(-32deg)'});

    
});


$( ".Card" ).mouseleave(function() {
    $( ".Green" ).animate({
        width: '100%',
        height: '100%',
        top:'0',
        left:'0'
    });

    $( ".Info" ).animate({opacity: '0'});
    $( ".container" ).animate({opacity: '0'});
    $( "img" ).css({transform: 'rotate(0deg)'});



});