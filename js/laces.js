// Developed by: Andrew Duckworth 2014
// Copyright 2014 Andrew Duckworth, under the Apache 2
// https://github.com/gitpress/laces
//

$(document).ready(function() {
  "use strict";
  
  $( "div" ).filter( ".col-md-12" ).toggleClass("col-md-10");
  
  $( "div" ).filter( ".col-md-6" ).toggleClass("col-md-5"); 
  
  $( "div" ).filter( ".col-md-8" ).toggleClass("col-md-6");  
});