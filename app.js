$('#full').click(function (){
    $('.all').addClass('test');
})

$('#none').click(function (){
    $('.all').removeClass('test');
})

$('.circle').click(function (){
    $(this).toggleClass('test');
})

$('.square').click(function (){
    $('.line').toggleClass('test');
})

$('.diamond').click(function (){
    $('#line3').toggleClass('test');
    $('#line3').eq(2).toggleClass('test')
})