$(document).ready(function () {

    
    // if ($('#particles-js').length) {
    //     particlesJS("particles-js", {
    //         "particles": {
    //             "number": {
    //                 "value": 120,
    //                 "density": {
    //                     "enable": true,
    //                     "value_area": 800
    //                 }
    //             },
    //             "color": {
    //                 "value": "#ffffff"
    //             },
    //             "shape": {
    //                 "type": "circle",
    //                 "stroke": {
    //                     "width": 0,
    //                     "color": "#000000"
    //                 },
    //                 "polygon": {
    //                     "nb_sides": 5
    //                 },
    //                 "image": {
    //                     "src": "img/github.svg",
    //                     "width": 100,
    //                     "height": 100
    //                 }
    //             },
    //             "opacity": {
    //                 "value": 0.5,
    //                 "random": false,
    //                 "anim": {
    //                     "enable": false,
    //                     "speed": 1,
    //                     "opacity_min": 0.1,
    //                     "sync": false
    //                 }
    //             },
    //             "size": {
    //                 "value": 3,
    //                 "random": true,
    //                 "anim": {
    //                     "enable": false,
    //                     "speed": 40,
    //                     "size_min": 0.1,
    //                     "sync": false
    //                 }
    //             },
    //             "line_linked": {
    //                 "enable": true,
    //                 "distance": 150,
    //                 "color": "#ffffff",
    //                 "opacity": 0.4,
    //                 "width": 1
    //             },
    //             "move": {
    //                 "enable": true,
    //                 "speed": 2,
    //                 "direction": "none",
    //                 "random": false,
    //                 "straight": false,
    //                 "out_mode": "out",
    //                 "bounce": false,
    //                 "attract": {
    //                     "enable": false,
    //                     "rotateX": 600,
    //                     "rotateY": 1200
    //                 }
    //             }
    //         },
    //         "interactivity": {
    //             "detect_on": "canvas",
    //             "events": {
    //                 "onhover": {
    //                     "enable": true,
    //                     "mode": "grab"
    //                 },
    //                 "onclick": {
    //                     "enable": true,
    //                     "mode": "push"
    //                 },
    //                 "resize": true
    //             },
    //             "modes": {
    //                 "grab": {
    //                     "distance": 140,
    //                     "line_linked": {
    //                         "opacity": 1
    //                     }
    //                 },
    //                 "bubble": {
    //                     "distance": 400,
    //                     "size": 40,
    //                     "duration": 2,
    //                     "opacity": 8,
    //                     "speed": 3
    //                 },
    //                 "repulse": {
    //                     "distance": 200,
    //                     "duration": 0.4
    //                 },
    //                 "push": {
    //                     "particles_nb": 4
    //                 },
    //                 "remove": {
    //                     "particles_nb": 2
    //                 }
    //             }
    //         },
    //         "retina_detect": true
    //     });
    // }

    $('.particles-js').each(function (index) {
            // Створюємо унікальний ID для кожного блоку
            var uniqueId = 'particles-js-' + index;
            $(this).attr('id', uniqueId);

            // Ініціалізуємо particles для кожного блоку окремо
            particlesJS(uniqueId, {
                "particles": {
                    "number": {
                        "value": 120,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        });

    // burger
    if ($('.burger2').length) {
        (function () {
            var burger2;
            burger2 = document.querySelector(".burger2");
            burger2.addEventListener("click", function () {
                return burger2.classList.toggle("on");
            });

        }).call(this);
    }

    $('.burger').click(function () {
        $('body').toggleClass('hidden');
        $('.header__nav').toggleClass('show');

        // Перевіряємо, чи меню відкрите
        if ($('.header__nav').hasClass('show')) {
            // Створюємо overlay, якщо його ще немає
            if (!$('.menu-overlay').length) {
                $('<div class="menu-overlay"></div>').appendTo('body');
            }
            // Показуємо overlay з невеликою затримкою для плавної анімації
            setTimeout(function () {
                $('.menu-overlay').addClass('active');
            }, 10);
        } else {
            // Приховуємо overlay
            $('.menu-overlay').removeClass('active');
            // Видаляємо overlay після завершення анімації
            setTimeout(function () {
                $('.menu-overlay').remove();
            }, 300);
        }
    });

    // Закриття меню при кліку на overlay
    $(document).on('click', '.menu-overlay', function () {
        $('.burger').click();
    });

    // readmore
    $('.readmore-btn').click(function(){
        $(this).toggleClass('active');
        $(this).next('.details__info').slideToggle();
    })











})