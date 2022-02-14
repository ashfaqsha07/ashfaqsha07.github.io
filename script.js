$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //cursor2

    // var cursor=$(".cursordy"),follower=$(".cursordy-follower"),posX=0,posY=0,mouseX=0,mouseY=0;
    // TweenMax.to({},.016,{repeat:-1,onRepeat:function(){posX+=(mouseX-posX)/9,posY+=(mouseY-posY)/9,TweenMax.set(follower,{css:{left:posX-20,top:posY-20}}),TweenMax.set(cursor,{css:{left:mouseX,top:mouseY}})}}),
    // $(document).on("mousemove",(function(e){mouseX=e.pageX,mouseY=e.pageY})),
    // $(".redcursor").on("mouseenter",(function(){cursor.addClass("active"),follower.addClass("active")})),$(".redcursor").on("mouseleave",(function(){cursor.removeClass("active"),follower.removeClass("active")}));

    // cursor 

    (function() {
        var follower, init, mouseX, mouseY, positionElement, printout, timer;
      
        follower = document.getElementById('follower');
      
        printout = document.getElementById('printout');
      
        mouseX = (event) => {
          return event.clientX;
        };
      
        mouseY = (event) => {
          return event.clientY;
        };
      
        positionElement = (event) => {
          var mouse;
          mouse = {
            x: mouseX(event),
            y: mouseY(event)
          };
          follower.style.top = mouse.y + 'px';
          return follower.style.left = mouse.x + 'px';
        };
      
        timer = false;
      
        window.onmousemove = init = (event) => {
          var _event;
          _event = event;
          return timer = setTimeout(() => {
            return positionElement(_event);
          }, 1);
        };
      
      }).call(this);
      

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Editor", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Editor", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});