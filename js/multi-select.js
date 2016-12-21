
/*********************************************
  :: Multi Select images
********************************************/


var please = function(){
     console.log("working");
    $('.but-1').on("click",function() {
         console.log("clicked!!!");
        if( $(".inp-1").prop("checked") != true)
        {
            $(".but-1").addClass('active');
            $('.inp-1').prop('checked',true);
             $('.img-1').css('filter','brightness(80%)');
            
        }
        else
        {
         $(".but-1").removeClass('active');
         $('.inp-1').prop('checked',false);
         $('.img-1').css('filter','brightness(100%)');
         $(".but-1").removeClass('rectangle-visited');
            
        }
       
    });

    $('.but-2').on("click",function() {
             console.log("clicked!!!");
            if( $(".inp-2").prop("checked") != true)
            {
                $(".but-2").addClass('active');
                $('.inp-2').prop('checked',true);
                 $('.img-2').css('filter','brightness(80%)');
                
            }
            else
            {
             $(".but-2").removeClass('active');
             $('.inp-2').prop('checked',false);
             $('.img-2').css('filter','brightness(100%)');
             $(".but-2").removeClass('rectangle-visited');
                
            }
           
        });

    $('.but-3').on("click",function() {
             console.log("clicked!!!");
            if( $(".inp-3").prop("checked") != true)
            {
                $(".but-3").addClass('active');
                $('.inp-3').prop('checked',true);
                 $('.img-3').css('filter','brightness(80%)');
                
            }
            else
            {
             $(".but-3").removeClass('active');
             $('.inp-3').prop('checked',false);
             $('.img-3').css('filter','brightness(100%)');
             $(".but-3").removeClass('rectangle-visited');
                
            }
           
        });

    $('.but-4').on("click",function() {
             console.log("clicked!!!");
            if( $(".inp-4").prop("checked") != true)
            {
                $(".but-4").addClass('active');
                $('.inp-4').prop('checked',true);
                 $('.img-4').css('filter','brightness(80%)');
                
            }
            else
            {
             $(".but-4").removeClass('active');
             $('.inp-4').prop('checked',false);
             $('.img-4').css('filter','brightness(100%)');
             $(".but-4").removeClass('rectangle-visited');
                
            }
           
        });

    $('.but-5').on("click",function() {
             console.log("clicked!!!");
            if( $(".inp-5").prop("checked") != true)
            {
                $(".but-5").addClass('active');
                $('.inp-5').prop('checked',true);
                 $('.img-5').css('filter','brightness(80%)');
                
            }
            else
            {
             $(".but-5").removeClass('active');
             $('.inp-5').prop('checked',false);
             $('.img-5').css('filter','brightness(100%)');
             $(".but-5").removeClass('rectangle-visited');
                
            }
           
        });
    $('.but-6').on("click",function() {
             console.log("clicked!!!");
            if( $(".inp-6").prop("checked") != true)
            {
                $(".but-6").addClass('active');
                $('.inp-6').prop('checked',true);
                 $('.img-6').css('filter','brightness(80%)');
                
            }
            else
            {
             $(".but-6").removeClass('active');
             $('.inp-6').prop('checked',false);
             $('.img-6').css('filter','brightness(100%)');
             $(".but-6").removeClass('rectangle-visited');
                
            }
           
        });

}

please();