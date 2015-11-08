$(document).ready(function() {

    var tap = new Audio('tap.mp3');
    var country = new Audio('country.mp3');
    var applause = new Audio('applause.mp3');
    var wow = new Audio('wow.mp3');
    var scratch = new Audio('scratch.mp3');
    var wind = new Audio('wind.mp3');
    var boing = new Audio('boing.mp3');

    $('#book').slick({
        infinite: false,
        slidesToShow: 1,
        speed: 600,
        arrows: false,
        dots: false
    });

    $('.sun').velocity({
        rotateZ: "360deg"
    }, {
        duration: 40000,
        easing: "linear",
        loop: true,
        delay: false,
        mobileHA: true
    });

    $('.clouds').velocity({
        translateX: "100px",
    }, {
        duration: 10000,
        easing: "linear",
        loop: true,
        delay: false,
        mobileHA: true
    });

    $('.clouds').click(function() {
        setTimeout(function() {
            wind.pause();
            wind.currentTime = 0;
        }, 5000)
        wind.play();
    });

    $('.butterfly').mousedown(function() {
        setTimeout(function() {
            country.pause();
            scratch.currentTime = 0;
        }, 5000);
        country.play();
    });

    $('.lamp').mousedown(function() {
        tap.play();
        $('.lights-off').toggle();
    });
    $('.ball').mousedown(function() {
        boing.play();
    });

    $('.bag').mousedown(function() {
        setTimeout(function() {
            scratch.pause();
            scratch.currentTime = 0;
        }, 2000)
        scratch.play();
    });

    $fly = $('.page-3 .bug');
    $fly.mousedown(function() {
        tap.play();
        this.remove();
        done();
    })
    for (var i = 9; i >= 0; i--) {
        var $f = $fly.clone().appendTo('.page-3');
        $f.mousedown(function() {
            tap.play();
            this.remove();
            done();
        })
        animate($f);
    }

    function done() {
        if ($('.page-3 .bug').length === 0) {
            setTimeout(function() {
                applause.pause();
                scratch.currentTime = 0;
            }, 5000)
            wow.play();
            setTimeout(function() {
                applause.play();
            }, 500)
        }
    }

    animate($fly)

    function animate($fly) {
        $fly.removeData();
        $fly.css('bottom', '-88px');
        $fly.css('left', Math.floor(Math.random() * 256));
        $fly.velocity({
            translateZ: 0,
            translateX: Math.floor((Math.random() * 1024)),
            translateY: -900,
        }, {
            easing: "swing",
            delay: Math.floor((Math.random() * 5000) + 500),
            duration: Math.floor((Math.random() * 10000) + 5000),
            complete: function() {
                $fly.removeAttr('style');
                animate($fly);
            }
        })
    }

});
