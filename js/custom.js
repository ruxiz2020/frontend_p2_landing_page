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
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
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


// detect which part of page the user is currently in and then add
// active class dynamically to that navigation item
window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');

			if (entry.intersectionRatio > 0.0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
				//document.querySelector(`nav li a[href="#${id}"]`).parentElement.find('a').addClass('active')
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove("active");
				//document.querySelector(`nav li a[href="#${id}"]`).parentElement.find('a').removeClass('active')
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});

});





// Navigation is built dynamically as an unordered list.

function generate_navBar() {
  var links = ["#hero_section", "#aboutUs", "#service",
              "#Portfolio", "#team", "#contact"];
  var texts_arr = ["HOME", "CAST", "PLOT & HISTORY",
              "PHOTOS", "TEAM", "COMMENT"];
  var section_arr = ["sec1", "sec2", "sec3",
                  "sec4", "sec5", "sec6"];
  var ul = document.createElement("ul");
  var li, a, text;
  for (var i = 0, l = links.length; i < l; ++i) {
    li = document.createElement('li');
    a  = document.createElement('a');
    text = document.createTextNode(texts_arr[i]);

    a.href = links[i];

    a.appendChild(text);
    li.appendChild(a);
    //li.id = section_arr[i];
    a.setAttribute("class", section_arr[i]);
    ul.appendChild(li);
    ul.setAttribute("class", "nav navbar-nav navStyle");

  }
  var element = document.getElementById("mainNav");
  element.appendChild(ul);
}

window.onload = function() {
  generate_navBar();
};
