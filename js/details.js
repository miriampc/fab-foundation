$(document).foundation()
$('.sim-thumb').on('mouseover', function() {
  $('#main-product-image').attr('src', $(this).data('image'));
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    lazyLoad : false,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1100:{
            items:5
        }
    }
})

// Modal carrito

document.getElementById('send-checking').addEventListener('click', function(){
	var checking=document.getElementById('checking');
	var checkout=document.getElementById('checkout');
	checkout.style.display="none";
	checking.style.display="block";
});
