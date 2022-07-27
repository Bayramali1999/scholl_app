$(".input-group > input").focus(function(e){
    $(this).parent().addClass("input-group-focus");
}).blur(function(e){
    $(this).parent().removeClass("input-group-focus");
});
//bootstrap tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
//owl carousel
$('.owl-carousel.2-items').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
$('.owl-carousel.3-items').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$('.owl-carousel.4-items').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.owl-carousel.5-items').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.btn-circle').click(function() {
        $('.modal_view').addClass('modal_view_active');
        $("body").css("overflow","hidden");
  });

$('.close_btn').click(function(){
    $('.modal_view').removeClass("modal_view_active");
    $("body").css("overflow","auto");
});

