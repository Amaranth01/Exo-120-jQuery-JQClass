$('#full').click(function (){
    $('.all').addClass('test');
});

$('#none').click(function (){
    $('.all').removeClass('test');
});

$('.circle').click(function (){
    $(this).toggleClass('test');
});

$('.square').click(function (){
    $(this).siblings().toggleClass('test');
    $(this).toggleClass('test');
});

$('.diamond').click(function (){
    $('#line3').children().toggleClass('test');
    $(this).eq(2).toggleClass('test');
});