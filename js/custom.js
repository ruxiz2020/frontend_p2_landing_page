//Header shour detail button
var i = 0;
var txt = 'on December 20, 2019 (USA) - Walt Disney Pictures';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//Return to top button
//Get the button
var mybutton = document.getElementById("backtotop_button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Responsive navbar dropdown
function responsiveNav() {
  var x = document.getElementById("main-nav");
  if (x.className === "navStyle") {
    x.className += " responsive";
  } else {
    x.className = "navStyle";
  }
}
