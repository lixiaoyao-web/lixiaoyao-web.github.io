"use strict";
   var a_idx=0;
   function delay(){
   $(".buryit").removeAttr("onclick")
   }
   jQuery(document).ready(function(n){
   n("body").click(function(e){
   var t=new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善"),
   o=n("<span/>").text(t[a_idx]);
       a_idx=(a_idx+1)%t.length;
       var a=e.pageX,i=e.pageY;
       o.css({
       "z-index":5,top:i-20,left:a,position:"absolute","font-weight":"bold",color:"#ea4335"}),
           n("body").append(o),o.animate({top:i-180,opacity:0},3e3,function(){o.remove()})}),setTimeout("delay()",2e3)});
