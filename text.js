setTimeout(()=>{
    $(".progress").each(function(){
      var int = 100;
      var $bar = $(this).find(".bar");
      var $img = $(this).find("#b");
      var perc =100;
      $({p:0}).animate({p:perc}, {
        // duration: 1*12*60*60*1000,
        duration: 30*1000,
        easing: "swing",
        step: function(p) {
          $bar.css({
            transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
            // 45 is to add the needed rotation to have the green borders at the bottom
          });
        }
      });

    $("#b").animate({/*left: "+="+perc*/},{
      duration:30*1000,
      easing:"swing"
    });

    });

  },100)