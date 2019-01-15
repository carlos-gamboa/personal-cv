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

  $("#skills").waypoint(
    function(direction) {
      if (direction === 'down') {
        $("#main-nav--skills").addClass("active");
        $("#main-nav--about").removeClass("active");
      } else {
        $("#main-nav--skills").removeClass("active");
        $("#main-nav--about").addClass("active");
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
        $("#main-nav--skills").removeClass("active");
      } else {
        $("#main-nav--portfolio").removeClass("active");
        $("#main-nav--skills").addClass("active");
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

  $("#about--1").waypoint(
    function(direction) {
      $("#about--1").addClass("animated fadeInRight");
      $("#about--1").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#about--2").waypoint(
    function(direction) {
      $("#about--2").addClass("animated fadeInRight");
      $("#about--2").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#about--3").waypoint(
    function(direction) {
      $("#about--3").addClass("animated fadeInRight");
      $("#about--3").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#about--4").waypoint(
    function(direction) {
      $("#about--4").addClass("animated fadeInRight");
      $("#about--4").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#skill-tech--1").waypoint(
    function(direction) {
      $("#skill-tech--1").addClass("animated fadeInUp");
      $("#skill-tech--1").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#skill-tech--2").waypoint(
    function(direction) {
      $("#skill-tech--2").addClass("animated fadeInUp");
      $("#skill-tech--2").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#skill-tech--3").waypoint(
    function(direction) {
      $("#skill-tech--3").addClass("animated fadeInUp");
      $("#skill-tech--3").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#skill-tech--4").waypoint(
    function(direction) {
      $("#skill-tech--4").addClass("animated fadeInUp");
      $("#skill-tech--4").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#skill-tech--5").waypoint(
    function(direction) {
      $("#skill-tech--5").addClass("animated fadeInUp");
      $("#skill-tech--5").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#skill-tech--6").waypoint(
    function(direction) {
      $("#skill-tech--6").addClass("animated fadeInUp");
      $("#skill-tech--6").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#skill-tech--7").waypoint(
    function(direction) {
      $("#skill-tech--7").addClass("animated fadeInUp");
      $("#skill-tech--7").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#skill-tech--8").waypoint(
    function(direction) {
      $("#skill-tech--8").addClass("animated fadeInUp");
      $("#skill-tech--8").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#skill-soft--1").waypoint(
    function(direction) {
      $("#skill-soft--1").addClass("animated fadeInUp");
      $("#skill-soft--1").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#skill-soft--2").waypoint(
    function(direction) {
      $("#skill-soft--2").addClass("animated fadeInUp");
      $("#skill-soft--2").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#skill-soft--3").waypoint(
    function(direction) {
      $("#skill-soft--3").addClass("animated fadeInUp");
      $("#skill-soft--3").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $("#skill-soft--4").waypoint(
    function(direction) {
      $("#skill-soft--4").addClass("animated fadeInUp");
      $("#skill-soft--4").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $(".project--1").waypoint(
    function(direction) {
      $(".project--1").addClass("animated fadeInUp");
      $(".project--1").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $(".project--2").waypoint(
    function(direction) {
      $(".project--2").addClass("animated fadeInUp");
      $(".project--2").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $(".project--3").waypoint(
    function(direction) {
      $(".project--3").addClass("animated fadeInUp");
      $(".project--3").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $(".collage__item--1").waypoint(
    function(direction) {
      $(".collage__item--1").addClass("animated fadeInUp");
      $(".collage__item--1").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $(".collage__item--2").waypoint(
    function(direction) {
      $(".collage__item--2").addClass("animated fadeInUp");
      $(".collage__item--2").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $(".collage__item--3").waypoint(
    function(direction) {
      $(".collage__item--3").addClass("animated fadeInUp");
      $(".collage__item--3").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $(".collage__item--4").waypoint(
    function(direction) {
      $(".collage__item--4").addClass("animated fadeInUp");
      $(".collage__item--4").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $(".collage__item--5").waypoint(
    function(direction) {
      $(".collage__item--5").addClass("animated fadeInUp");
      $(".collage__item--5").removeClass("transparent");
    },
    {
      offset: "75%"
    }
  );

  $(".collage__item--6").waypoint(
    function(direction) {
      $(".collage__item--6").addClass("animated fadeInUp");
      $(".collage__item--6").removeClass("transparent");
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

  if(matchMedia) {
    const isMobile = window.matchMedia('(max-width: 992px)');
    isMobile.addListener(widthChange);
    widthChange(isMobile);
  }

  function widthChange(isMobile) {
    let navList = document.getElementById('header-nav');
    if(!isMobile.matches) {
      navList.style = '';
    }
  }
});
