var height = $('#header').height();

$(window).scroll(function () {
    if($(this).scrollTop() > height){
        $('.navbar').addClass('fixed');
    }else{
        $('.navbar').removeClass('fixed');
    }
});