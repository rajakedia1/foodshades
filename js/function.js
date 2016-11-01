$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    //console.log(wScroll)
    
    $('.logo b').css({
        'transform' : 'translate(0px, ' + wScroll/1.6 +'%)'
    });
    $('.logo p').css({
        'transform' : 'translateX(0px, ' + wScroll/1.6 +'%)'
    });
    $('.fore-bird').css({
        'transform' : 'translate(0px, -' + wScroll/16 +'%)'
    });
    
    if(wScroll > 10){  //to fade sub title
        
        $('.logo p').css({
            'opacity' : '0',
            'transition' : 'all 0.3s ease-in-out'
        });
    }else{
        $('.logo p').css({
            'opacity' : '1',
            'transition' : 'all 0.3s ease-in-out'
        });
    }
    
    if(wScroll > $('.sitepic').offset().top - ($(window).height() / 1.6)){  // website piks
        
        $('.sitepic figure').each(function(i){
            
            setTimeout(function(){
                
                $('.sitepic figure').eq(i).addClass('is-showing');
                
            },150 * (i+1));
        });
        
    }
    
    if(wScroll > $(window).height() - 130){ // for black nav
        $('.nav').css({
            'background' : 'black',
            'transition' : 'all 0.3s ease-in-out'
        });
        $('.title').css({
            'display' : 'block'
        });
    }else{
        $('.nav').css({
            'background' : 'none',
            'transition' : 'all 0.3s ease-in-out'
        });
        $('.title').css({
            'display' : 'none'
        });
    }
    
    if(wScroll > $('.skill .skillset').offset().top - ($(window).height()/1.2)){  // skill set
        
        $('.skill .skillset li').each(function(i){
            
            setTimeout(function(){
                
                $('.skill .skillset li').eq(i).addClass('is-showing2');
                
            },150 * (i+1));
        });
        
    }
    
    if(wScroll > $('.field .fieldset').offset().top - ($(window).height()/1.2)){  // skill set
        
        $('.field .fieldset li').each(function(i){
            
            setTimeout(function(){
                
                $('.field .fieldset li').eq(i).addClass('is-showing3');
                
            },150 * (i+1));
        });
        
    }
    
});




$('.bird-box').css({
            
    'background-size' : ' auto ' + $(window).height() 
});

$('.bird-box').css({
    'height' : $(window).height()
}); 

$('.skill').css({
    'height' : $(window).height(),
    'background-size' : ' auto ' + $(window).height() 
});
$('.skill .skillset').css({
    'top' : ($(window).height() - $('.skill .skillset').height() - 50)/2
    //'padding' : 'auto',
    
});
