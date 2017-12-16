function eHorseMaster(variable){
	var groupofthings = document.querySelectorAll('section');
	var numberofthings = groupofthings.length;
	
	for (i=0; i<numberofthings; i++){
		var thingtext =groupofthings[i].id;
		if (thingtext===variable){
			groupofthings[i].className="visible";
		}else {
			groupofthings[i].className="invisible";
		}
	}
}

function showSection(sname){
	
	// Find your group of things
	var sections = document.querySelectorAll('section');
	
	//Loop for the length of the group
	for (i=0; i<sections.length; i++){
		if (sections[i].id != sname){
			sections[i].className = "invisible";
		} else {
			sections[i].className = "visible";
		}
	}
}

function filterSkills(type){
	var skillBoxes = document.querySelectorAll(".skillbox");
	
	if(type ==='All'){
		for (i=0; i<skillBoxes.length; i++){
			skillBoxes[i].style.display = 'initial';
		}
	} else {
		for (i=0; i<skillBoxes.length; i++){
			if(skillBoxes[i].dataset.type === type || skillBoxes[i].id === "livsb"){	
				skillBoxes[i].style.display = 'initial';
			} else {
				skillBoxes[i].style.display = 'none';
			}
		}
	}
}


/* EHorse Tools */

function fadeout(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 15);
}

function fadein(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 15);
}