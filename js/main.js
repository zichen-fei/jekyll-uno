---
layout: null
sitemap:
  exclude: 'yes'
---
$(document).ready(function () {
  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})

document.addEventListener("DOMContentLoaded",
function() {
    new SweetScroll({});
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 5,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
				//value: "random"
            },
            shape: {
                type: "star",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: .1,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: false,
                anim: {
                    enable: true,
                    speed: 21.18081918081920,
                    size_min: 1.5,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: .4,
                width: 1.5
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
            nb: 80
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 170,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    })
},
!1);

var bszCaller, bszTag; !
function() {
    var c, d, e, a = !1,
    b = [];
    ready = function(c) {
        return a || "interactive" === document.readyState || "complete" === document.readyState ? c.call(document) : b.push(function() {
            return c.call(this)
        }),
        this
    },
    d = function() {
        for (var a = 0,
        c = b.length; c > a; a++) b[a].apply(document);
        b = []
    },
    e = function() {
        a || (a = !0, d.call(window), document.removeEventListener ? document.removeEventListener("DOMContentLoaded", e, !1) : document.attachEvent && (document.detachEvent("onreadystatechange", e), window == window.top && (clearInterval(c), c = null)))
    },
    document.addEventListener ? document.addEventListener("DOMContentLoaded", e, !1) : document.attachEvent && (document.attachEvent("onreadystatechange",
    function() { / loaded | complete / .test(document.readyState) && e()
    }), window == window.top && (c = setInterval(function() {
        try {
            a || document.documentElement.doScroll("left")
        } catch(b) {
            return
        }
        e()
    },
    5)))
} (),
bszCaller = {
    fetch: function(a, b) {
        var c = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
        window[c] = this.evalCall(b),
        a = a.replace("=BusuanziCallback", "=" + c),
        scriptTag = document.createElement("SCRIPT"),
        scriptTag.type = "text/javascript",
        scriptTag.defer = !0,
        scriptTag.src = a,
        document.getElementsByTagName("HEAD")[0].appendChild(scriptTag)
    },
    evalCall: function(a) {
        return function(b) {
            ready(function() {
                try {
                    a(b),
                    scriptTag.parentElement.removeChild(scriptTag)
                } catch(c) {
                    bszTag.hides()
                }
            })
        }
    }
},
bszCaller.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",
function(a) {
    bszTag.texts(a),
    bszTag.shows()
}),
bszTag = {
    bszs: ["site_pv", "page_pv", "site_uv"],
    texts: function(a) {
        this.bszs.map(function(b) {
            var c = document.getElementById("busuanzi_value_" + b);
            c && (c.innerHTML = a[b])
        })
    },
    hides: function() {
        this.bszs.map(function(a) {
            var b = document.getElementById("busuanzi_container_" + a);
            b && (b.style.display = "none")
        })
    },
    shows: function() {
        this.bszs.map(function(a) {
            var b = document.getElementById("busuanzi_container_" + (a + 200));
            b && (b.style.display = "inline")
        })
    }
};

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?fdc5ceaf5ebd628f4694cf7bd4d03208";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();