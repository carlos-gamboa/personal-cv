document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

$(document).ready(function() {

  var body = document.body,timer;
  window.addEventListener('scroll', function() {
     clearTimeout(timer);
    if(!body.classList.contains('disable-hover')) {
      body.classList.add('disable-hover')
    }
     timer = setTimeout(function(){
      body.classList.remove('disable-hover')
    },500);
  }, false);

  /* STICKY NAVIGATION */
  $("#about").waypoint(
    function(direction) {
      if (direction === "down") {
        $(".header").addClass("header--sticky");
      } else {
        $(".header").removeClass("header--sticky");
      }
    },
    {
      offset: "25%"
    }
  );

  /* ANIMATIONS ON SCROLL */
  $("#home").waypoint(
    function(direction) {
      $("#main-nav--hero").addClass("active");
    },
    {
      offset: " 10%"
    }
  );

  $("#about").waypoint(
    function(direction) {
      if (direction === 'down') {
        $("#main-nav--about").addClass("active");
        $("#main-nav--home").removeClass("active");
      } else {
        $("#main-nav--about").removeClass("active");
        $("#main-nav--home").addClass("active");
      }
    },
    {
      offset: " 10%"
    }
  );

  $("#portfolio").waypoint(
    function(direction) {
      if (direction === 'down') {
        $("#main-nav--portfolio").addClass("active");
        $("#main-nav--about").removeClass("active");
      } else {
        $("#main-nav--portfolio").removeClass("active");
        $("#main-nav--about").addClass("active");
      }
    },
    {
      offset: " 10%"
    }
  );

  $("#interests").waypoint(
    function(direction) {
      if (direction === 'down') {
        $("#main-nav--interests").addClass("active");
        $("#main-nav--portfolio").removeClass("active");
      } else {
        $("#main-nav--interests").removeClass("active");
        $("#main-nav--portfolio").addClass("active");
      }
    },
    {
      offset: " 10%"
    }
  );

  $("#experience--1").waypoint(
    function(direction) {
      $("#experience--1").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );

  $("#experience--2").waypoint(
    function(direction) {
      $("#experience--2").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );

  $("#experience--3").waypoint(
    function(direction) {
      $("#experience--3").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );

  $("#experience--4").waypoint(
    function(direction) {
      $("#experience--4").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );

  $("#skill--1").waypoint(
    function(direction) {
      $("#skill--1").addClass("animated fadeInUp");
      var bar1 = new ldBar("#skill--sql");
      setTimeout(function() {
        bar1.set(66);
      }, 400);
    },
    {
      offset: "75%"
    }
  );

  $("#skill--2").waypoint(
    function(direction) {
      $("#skill--2").addClass("animated fadeInUp");
      var bar1 = new ldBar("#skill--css");
      setTimeout(function() {
        bar1.set(63);
      }, 400);
    },
    {
      offset: "75%"
    }
  );

  $("#skill--3").waypoint(
    function(direction) {
      $("#skill--3").addClass("animated fadeInUp");
      var bar1 = new ldBar("#skill--java");
      setTimeout(function() {
        bar1.set(53);
      }, 400);
    },
    {
      offset: "75%"
    }
  );

  $("#skill--4").waypoint(
    function(direction) {
      $("#skill--4").addClass("animated fadeInUp");
      var bar1 = new ldBar("#skill--angular");
      setTimeout(function() {
        bar1.set(50);
      }, 400);
    },
    {
      offset: "75%"
    }
  );

  $("#skill--5").waypoint(
    function(direction) {
      $("#skill--5").addClass("animated fadeInUp");
      var bar1 = new ldBar("#skill--c");
      setTimeout(function() {
        bar1.set(46);
      }, 400);
    },
    {
      offset: "75%"
    }
  );

  $("#skill--6").waypoint(
    function(direction) {
      $("#skill--6").addClass("animated fadeInUp");
      var bar1 = new ldBar("#skill--js");
      setTimeout(function() {
        bar1.set(40);
      }, 400);
    },
    {
      offset: "75%"
    }
  );

  $(".project--1").waypoint(
    function(direction) {
      $(".project--1").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );

  $(".project--2").waypoint(
    function(direction) {
      $(".project--2").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );

  $(".project--3").waypoint(
    function(direction) {
      $(".project--3").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );

  $(".collage__item--1").waypoint(
    function(direction) {
      $(".collage__item--1").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );

  $(".collage__item--2").waypoint(
    function(direction) {
      $(".collage__item--2").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );

  $(".collage__item--3").waypoint(
    function(direction) {
      $(".collage__item--3").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );

  $(".collage__item--4").waypoint(
    function(direction) {
      $(".collage__item--4").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );

  $(".collage__item--5").waypoint(
    function(direction) {
      $(".collage__item--5").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );

  $(".collage__item--6").waypoint(
    function(direction) {
      $(".collage__item--6").addClass("animated fadeInUp");
    },
    {
      offset: "75%"
    }
  );

  /* MOBILE NAV */
  $("#main-nav-toggle").click(function() {
    let nav = $("#header-nav");

    nav.slideToggle(200);
  });
});
