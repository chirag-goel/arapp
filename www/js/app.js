/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */


// For improved debugging and maintenance of your app, it is highly
// recommended that you separate your JavaScript from your HTML files.
// Use the addEventListener() method to associate events with DOM elements.

// For example:

// var el ;
// el = document.getElementById("id_myButton") ;
// el.addEventListener("click", myEventHandler, false) ;



// The function below is an example of the best way to "start" your app.
// This example is calling the standard Cordova "hide splashscreen" function.
// You can add other code to it or add additional functions that are triggered
// by the same event or other events.

function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
}
document.addEventListener("app.Ready", onAppReady, false) ;


$(document).ready(function(){

    function first_show() {
        $(".button1-1").css("opacity","1");
        $(".button1-2").css("opacity","1");
        $(".button1-1").css("display","block");
        $(".button1-2").css("display","block");
        $(".calendar").css("opacity","1");
    }

    function first_hide() {
        $(".button1-1").css("opacity","0.8");
        $(".button1-2").css("opacity","0.8");
        $(".button1-1").css("display","none");
        $(".button1-2").css("display","none");
        $(".calendar").css("opacity","0");
    }

    function second_show() {    
        $(".button2-1").css("opacity","1");
        $(".button2-2").css("opacity","1");
        $(".button2-1").css("display","block");
        $(".button2-2").css("display","block");
        $(".video").css("opacity","1");
    }

    function second_hide() {
        $(".button2-1").css("opacity","0.8");
        $(".button2-2").css("opacity","0.8");
        $(".button2-1").css("display","none");
        $(".button2-2").css("display","none");
        $(".video").css("opacity","0");
    }

    function third_show() {
        $(".button3-1").css("opacity","1");
        $(".button3-2").css("opacity","1");
        $("#v1").css("opacity","0");
        $("#v2").css("opacity","0");
        $(".button3-1").css("display","block");
        $(".button3-2").css("display","block");
    }

    function third_hide() {
        $(".button3-1").css("opacity","0.8");
        $(".button3-2").css("opacity","0.8");
        $(".button3-1").css("display","none");
        $(".button3-2").css("display","none");
        $("#v1").css("opacity","1");
        $("#v2").css("opacity","1");
    }

    function fourth_show() {
        $(".button4-1").css("opacity","1");
        $(".button4-2").css("opacity","1");
        $(".furniture").css("opacity","1");
        $(".button4-1").css("display","block");
        $(".button4-2").css("display","block");
    }

    function fourth_hide() {
        $(".button4-1").css("opacity","0.8");
        $(".button4-2").css("opacity","0.8");
        $(".furniture").css("opacity","0");
        $(".button4-1").css("display","none");
        $(".button4-2").css("display","none");
    }

    function sixth_show() {
        $(".clock").css("opacity","0.8");
        var d = new Date();
        $(".clock").html(d.getHours() + ":" + d.getMinutes());
        setTimeout(function(){
            $(".clock").css("opacity","0");
        },3000);
    }

    function all_hide() {
        first_hide();
        second_hide();
        fourth_hide();
    }
//    setInterval(function(){
//        $.ajax({
//          type: "POST",
//          url: "http://localhost/leap/jay/getButton.php",
//          success: function(data) {
//            $(".data").html(data);
//          if(data == -1) {
//              $(".button").css("opacity","0")
//              $(".button").css("display","none");
//          } else {
//            $(".button").css("opacity","0.8");  
//              $(".button").css("display","block");
//            if(data == 0) {
//                all_hide();
//            } else if(data == 1) {
//                all_hide();
//                first_show();
//            } else if (data == 2) {
//                all_hide();
//                second_show();
//            } else if (data == 3) {
//                if($("#v1").css("opacity")==0) {
//                    third_hide();
//                } else {
//                    third_show();
//                }
//            } else if(data == 4){
//                all_hide();
//                fourth_show();
//            }
//            else if(data == 5) {
//                sixth_show();
//            } 
//          }
//          }
//        });
//    },500);
    
    var v = document.getElementById('v');
    var v2 = document.getElementById('v2');
   navigator.getUserMedia = (navigator.getUserMedia || 
                             navigator.webkitGetUserMedia || 
                             navigator.mozGetUserMedia || 
                             navigator.msGetUserMedia);
   if (navigator.getUserMedia) {
       var options = {
          video: {
            optional: [{facingMode: "environment"}]
          }
        };
       navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (typeof MediaStreamTrack === 'undefined' && navigator.getUserMedia) {
          alert('This browser doesn\'t support this demo :(');
        } else {
          MediaStreamTrack.getSources(function(sources) {
            for (var i = 0; i !== sources.length; ++i) {
              var source = sources[i];
              if (source.kind === 'video') {
                if (source.facing && source.facing == "environment") {
                  options.video.optional.push({'sourceId': source.id});
                }
              }
            }
            
            navigator.getUserMedia(options, function(stream) {
                var url = window.URL || window.webkitURL;
                v.src = url ? url.createObjectURL(stream) : stream;
                v.play();
                v2.src = url ? url.createObjectURL(stream) : stream;
                v2.play();
//                var canvas = document.getElementById('cropCvs');
//                var ctx = canvas.getContext('2d');
//                loop();
//                function loop(){
//                 var video = document.getElementById('v');
//                 ctx.drawImage(video, 0, 0);
//                 setTimeout(loop, 1000 / 30);
//                }
             },
            function(error) {
                alert('Something went wrong. (error code ' + error.code + ')');
                return;
             }
            );
          });
        }
      
   }
   else {
      alert('Sorry, the browser you are using doesn\'t support getUserMedia');
      return;
   }
});

