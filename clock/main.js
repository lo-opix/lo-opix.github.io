const dom_hours = document.getElementById("c-hours");
const dom_minutes = document.getElementById("c-minutes");
const dom_seconds = document.getElementById("c-seconds");

function updateDay(){
	const date = new Date()
	const days = document.getElementById("days").getElementsByTagName("li")
	for (let i = 0; i < 7; i++){
		days[i].classList.remove("active")
	}
	if (date.getDay() == 0){
		days[0].classList.add("active")
	}else{
		days[date.getDay() - 1].classList.add("active")
	}
}

let lastInit = Date.now()

function setCurrentTime() {
	let date = new Date();
	let hh = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();
	let elements = [hh, mm, ss];
	for (let element of elements) {
		if (element < 10) {
			let newElement = "0" + element.toString();
			let index = elements.indexOf(element);

			if (index !== -1) {
				elements[index] = newElement;
			}
		}
	}

	dom_hours.textContent = elements[0].toString();
	dom_minutes.textContent = elements[1].toString();

	let s_points = document.getElementsByClassName("second-point");

	if (elements[2] != 0) {
		for (var i = 0; i < ss; i++) {
			s_points[i].classList.add("point-active");
		}
	}else{
        for (var i = 0; i < s_points.length; i++) {
			s_points[i].classList.remove("point-active");
            s_points[i].classList.remove("line-point");
            s_points[i].classList.remove("hide");
		}
    }

    if(ss >= 20){
        s_points[0].classList.add("line-point")
        for (let i = 1; i < 20; i++){
            s_points[i].classList.add("hide")
        }
    }

    if(ss >= 40){
        s_points[0].classList.add("line-point")
		s_points[20].classList.add("line-point")
        for (let i = 21; i < 40; i++){
            s_points[i].classList.add("hide")
        }
    }

	if(mm = 0){
		updateDay()
	}


	let duration = Date.now() - lastInit
    console.log("func duration: " + duration + "ms")
	lastInit = Date.now()

	setTimeout(function () {
		setCurrentTime();
	}, 1000);
}
updateDay()
setCurrentTime();
