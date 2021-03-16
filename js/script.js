// event pada saat diklik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen
    var elemenTujuan = $(tujuan);
    // console.log(elemenTujuan.offset().top);

   $('html, body').animate({
       scrollTop: elemenTujuan.offset().top - 50
   }, 1000, 'easeInQuart');

   e.preventDefault();
});


//about
// $(window).on('load', function() {
//     $('.pkiri').addClass('pMuncul');
//     $('.pkanan').addClass('pMuncul');
// });

//parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    //jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px,'+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px,'+ wScroll/2 +'%)'
    });
    
    $('.jumbotron p').css({
        'transform' : 'translate(0px,'+ wScroll/1 +'%)'
    });


    //about
    $('.pkiri').addClass('pMuncul');
    $('.pkanan').addClass('pMuncul');


    //portofolio
    if( wScroll > $('.portofolio').offset().top - 250 ) {
        $('.portofolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portofolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    }
});







