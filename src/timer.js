// Set the date we're counting down to
var countDownDate = new Date("May 24, 2030 01:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get time
  var now = new Date().getTime();
    
  // Find the interval between now and the count down time
  var interval = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((interval % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = minutes + " minutes and " + seconds + " seconds";
    
  // If the count down is over, write some text 
  if (interval < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);