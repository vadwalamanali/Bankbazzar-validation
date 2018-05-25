userDetail={};
var	genderButton = document.querySelector(".gender_button");
var next = 	document.querySelector(".nxt");
var previous = document.querySelector(".prv");
var dobButton = document.querySelector(".dob_button");
	
var genderForm = function genderForm(event){
	event.preventDefault();
	var val = document.querySelector("input[name=gender]:checked");
	if(val){
		userDetail["gender"]= val.value;
		event.target.parentElement.querySelector(".error_msg").style.display = "none";
		$('.slider').slick('slickGoTo', 1);
		document.querySelector(".arrow").setAttribute("data-slide","slide2");
	} else {
		event.target.parentElement.querySelector(".error_msg").style.display = "block";
	}
};

var dobForm = function dobForm(event){
	
	event.preventDefault();
  var val = document.querySelector("input#dob").value;
  if (val != "") {
    userDetail["dob"] = val.value;
		event.target.parentElement.querySelector(".error_msg").style.display = "none";
		$('.slider').slick('slickGoTo', 2);
  } else {
		event.target.parentElement.querySelector(".error_msg").style.display = "block";
	}
	};


init = function init() {
	next.addEventListener("click",nextSlide);
	previous.addEventListener("click",previousSlide);
	genderButton.addEventListener("click", genderForm);
	dobButton.addEventListener("click",dobForm);
};
var previousSlide = function previousSlide(){
	$('.slider').slick('slickGoTo', parseInt(document.querySelector(".slick-current").getAttribute("data-slick-index")) - 1);
}
var nextSlide = function nextSlide(){
	var val = document.querySelector(".arrow").getAttribute("data-slide");

	if(val === "slide1"){
		genderButton.click();
	} else if(val === "slide2") {
		//document.querySelector(".prv").style.display= "none";
		dobButton.click();
	}	
}

init();