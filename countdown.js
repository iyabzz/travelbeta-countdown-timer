
$(document).ready(function(){
    $("#myModal").modal('show');
});

// Set the date we're counting down to
var countDownDate = new Date("May 20, 2020 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // $('#close').click(function() {
  //   $('#countdownModal').dialog('close');
  //   });
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  // Output the result in an element with id="demo"
  
  document.getElementById("countdowntimer").innerHTML ="<div style='display: flex; flex: 1; justify-content: space-between'><div style='display: flex; flex-direction: column; justify-content: center;'><span> " + days  +  "</span><span style='font-size: 18px; font-weight: 500'>Days</span></div>:" + "<div style='display: flex; flex-direction: column; justify-content: center;'><span> " + hours  +  "</span><span style='font-size: 18px; font-weight: 500'>Hours</span></div> : " 
  + "<div style='display: flex; flex-direction: column; justify-content: center;'><span> " + minutes  +  " </span><span style='font-size: 18px; font-weight: 500'>Minutes</span></div> : " + " <div style='display: flex; flex-direction: column; justify-content: center; width: 50px'><span> " + seconds  +  "</span><span style='font-size: 18px; font-weight: 500'>Seconds</span></div> </div>" ;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdowntimer").innerHTML = "EXPIRED";
  }
}, 1000);
