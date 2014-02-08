 // Page Scroll Script

 
 $(document).ready(function()

   {         

      $('a[href*=#]').click(function() {

         // skip Page Scroll on your sliders etc. 

         if($(this).parent().hasClass('scrollable_navigation') || $(this).attr('href').indexOf('javascript')>-1) return;

         // duration in ms

         var duration=500;
         
         // easing values: Check the easing script - http://gsgd.co.uk/sandbox/jquery/easing/ or use swing / linear

         var easing='linear';

         // Set your parameters

         var newHash=this.hash;

         var oldLocation=window.location.href.replace(window.location.hash, '');

         var newLocation=this;

         // make sure it's the same location      

         if(oldLocation+newHash==newLocation)

         {
            // get target

            var target=$(this.hash+', a[name='+this.hash.slice(1)+']').offset().top;

            // adjust target for anchors near the bottom of the page

            if(target > $(document).height()-$(window).height()) target=$(document).height()-$(window).height();         

            // set selector

            if($.browser.safari) var animationSelector='body:not(:animated)';

            else var animationSelector='html:not(:animated)';

            // animate to target and set the hash to the window.location after the animation

            $(animationSelector).animate({ scrollTop: target }, duration, easing, function() {

               // add new hash to the browser location

               window.location.href=newLocation;

            });

            // cancel default click action

            return false;

         }

      });

   });