
	//Accordion

	var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
		    acc[i].onclick = function(){
		        this.classList.toggle("active");

		        var panel = this.nextElementSibling;
		        if (panel.style.display === "block") {
		            panel.style.display = "none";
		        } else {
		            panel.style.display = "block";
		        }
		    }
		}

	//Navigation 

	function myFunction() {
	    var x = document.getElementById("myTopnav");
	    if (x.className === "icon-nav") {
	        x.className += "responsive";
	    } else {
	        x.className = "icon-nav";
	    }
	}
		var foo = document.getElementById('foo');
  		var topNav 	= document.getElementById("myTopnav");

		foo.addEventListener('click', function(){
      	topNav.classList.toggle('responsive')
		});

	//Countdown upcoming event

	var countDownDate = new Date("June 5, 2017 15:37:25").getTime();
	var x = setInterval(function() {
	    var now = new Date().getTime();
	    var distance = countDownDate - now;
	    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    document.getElementById('countdown').innerHTML = days + "d " + hours + "h "
	    + minutes + "m " + seconds + "s ";
	    if (distance < 0) {
	        clearInterval(x);
	        document.getElementById('countdown').innerHTML = "EXPIRED";
	    }
	}, 1000);