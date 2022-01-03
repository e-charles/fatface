


$(document).ready(function(){
        /*------ Navbar Shrink-------------*/
        $(window).on('scroll', function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass('navbar-shrink');
        }
        else{
            $(".navbar").removeClass('navbar-shrink');
        }
    });
    
    
    /*------ Features Carousel-------------*/
    
    $('.features-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});
    
    /*------ phases Carousel-------------*/
    
        $('.phases-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});
    
    
    
    /*------ Nav Collapse-------------*/
    
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });    
    
    
    
    /*------ toggle theme-------------*/
    function toggleTheme(){
        
        if(localStorage.getItem("web theme") !== null){
            if (localStorage.getItem("web theme") === "dark"){
                $("body").addClass("dark");
            }else{
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();
    
    $(".toggle-theme").on("click",function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("web theme", "dark");
        }
        else{
            localStorage.setItem("web theme", "light");
        }
        updateIcon();
    });
    
    
    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else{
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }
        
    
});