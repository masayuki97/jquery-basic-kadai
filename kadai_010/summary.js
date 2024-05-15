
$('#change-color').on('click',function(){
    $('#target').css('color','red');
})

$('#change-text').on('click',function(){
//    const textList=['hello','goodmorning','goodnight']
//    let rdm=Math.floor(Math.random()*textList.length)
//    $('#target').text(textList[rdm]);
        $('#target').text('hello');
})

$('#fade-out').on('click',function(){
    $('#target').fadeOut();
})

$('#fade-in').on('click',function(){
    $('#target').fadeIn();
})