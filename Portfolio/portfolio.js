// $(function() {

//     $(".progress").each(function() {

//     var value = $(this).attr('data-value');
//     console.log("I am In : "+value);
//     console.log("I am In 2 : "+percentageToDegrees(value));
//     var left = $(this).find('.progress-left .progress-bar');
//     var right = $(this).find('.progress-right .progress-bar');

//     if (value > 0) {
//         if (value <= 50) {
//         right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
//         } else {
//         right.css('transform', 'rotate(180deg)')
//         left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
//         }
//     }

//     })

//     function percentageToDegrees(percentage) {

//     return percentage / 100 * 360

//     }

// });
// var targetOffset = $("#skills").offset().top;
$( document ).ready(function() {   
    if($('#skills-box').length){
        var targetOffset = $('#skills-box').offset().top;
        console.log('abc'+targetOffset);
        var $w = $(window).scroll(function(){
            if ( $w.scrollTop() > targetOffset ) {  
                $('.progress').css({
                    // "background": "none",
                    // "margin": "0 auto",
                    // "box-shadow": "none",   
                    // "position": "relative"
                });
                $('.progress:after').css({
                    // "content": "",
                    // "border-radius": "50%",
                    // "border": "6px solid #f2f5f5",
                    // "position": "absolute",
                    // "width": "100%",
                    // "height": "100%",
                    // "top": "0",
                    // "left": "0"
                });
                $('.progress > span').css({
                    // "position": "absolute",
                    // "top": "0",
                    // "z-index": "1",
                    // "width": "50%",
                    // "height": "100%",
                    // "overflow": "hidden"
                });
                $('.progress, .progress-left').css({
                    // "left": "0"
                });
                
                $('.progress, .progress-bar').css({
                    // "border-width": "6px",
                    // "border-style": "solid",
                    // "position": "absolute",
                    // "width": "100%",
                    // "height": "100%",
                    // "background": "none",
                    // "top": "0"
                });
                
                $('.progress, .progress-left, .progress-bar').css({
                    // "left": "100%",
                    // "border-top-right-radius": "80px",
                    // "border-bottom-right-radius": "80px",
                    // "border-left": "0",
                    // "-webkit-transform-origin": "center left",
                    // "transform-origin": "center left"
                });
                
                $('.progress, .progress-right').css({
                    // "right": "0"
                });
                $('.progress, .progress-right, .progress-bar').css({
                    // "left": "-100%",
                    // "-webkit-transform-origin": "center right",
                    // "transform-origin": "center right",
                    // "border-top-left-radius": "80px",
                    // "border-bottom-left-radius": "80px",
                    // "border-right": "0",
                    // "animation":"loading-1 1.8s linear forwards"   
                });
                $('.progress, .progress-value').css({
                    // "font-size": "250%",
                    // "color": "black",
                    // "text-align": "center",
                    // "width": "100%",
                    // "height": "100%",
                    // "position": "absolute"
                });
                $('.progress.green, .progress-bar').css({
                    // "border-color": "#26abfd"
                });
                $('.progress.green, .progress-left, .progress-bar').css({
                    // "animation": "loading-2 1.5s linear forwards 1.8s"
                });
                var $left_animation_green = $('#progress-bar-animation-left-green');
                var $right_animation_green = $('#progress-bar-animation-right-green');
                $left_animation_green.addClass('progress-bar');
                $right_animation_green.addClass('progress-bar');
                var $left_animation_info = $('#progress-bar-animation-left-info');
                var $right_animation_info = $('#progress-bar-animation-right-info');
                $left_animation_info.addClass('progress-bar');
                $right_animation_info.addClass('progress-bar')
                var $left_animation_danger = $('#progress-bar-animation-left-danger');
                var $right_animation_danger = $('#progress-bar-animation-right-danger');
                $left_animation_danger.addClass('progress-bar');
                $right_animation_danger.addClass('progress-bar');
                var $left_animation_primary = $('#progress-bar-animation-left-primary');
                var $right_animation_primary = $('#progress-bar-animation-right-primary');
                $left_animation_primary.addClass('progress-bar');
                $right_animation_primary.addClass('progress-bar')
                var $left_animation_dark = $('#progress-bar-animation-left-dark');
                var $right_animation_dark = $('#progress-bar-animation-right-dark');
                $left_animation_dark.addClass('progress-bar');
                $right_animation_dark.addClass('progress-bar')
                var $left_animation_warning = $('#progress-bar-animation-left-warning');
                var $right_animation_warning = $('#progress-bar-animation-right-warning');
                $left_animation_warning.addClass('progress-bar');
                $right_animation_warning.addClass('progress-bar')
                // $('#voice2').css({"border-bottom":"2px solid #f4f5f8"});
                // $('#voice3').css({"border-bottom":"2px solid #2e375b"});
            } else {
            // ...
            }
        });
    }else{
        console.log("Not in good");
    }
});