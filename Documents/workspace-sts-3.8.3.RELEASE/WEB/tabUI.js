
// Window가 제대로 DOM 트리를 구성 한 후에 실행
window.addEventListener('load', addEvent);

var tabAbout = document.querySelector("#position");
var tabFriend = document.querySelector("#friend");
var tabLorem = document.querySelector("#theme");
var tabRepository = document.querySelector("#news");

var curClickedDiv = tabAbout;
var newClickedDiv = tabAbout;

var textDiv = document.getElementById("my_position");

function addEvent() {
	console.log("Window Loaded Completely!");

	tabAbout.addEventListener('click', clickEvent);
	tabFriend.addEventListener('click', clickEvent);
	tabLorem.addEventListener('click', clickEvent);
	tabRepository.addEventListener('click', clickEvent);
}

function clickEvent(event) {
	// console.log(event.target);
	var newClickedDivId = event.target.id;

	if (newClickedDivId === "position") {
		console.log("you clicked AboutMe Tab");
		newClickedDiv = tabAbout;
	} else if (newClickedDivId === "friend") {
		console.log("you clicked Friend Tab");
		newClickedDiv = tabFriend;
	} else if (newClickedDivId === "theme") {
		console.log("you clicked Lorem Tab");
		newClickedDiv = tabLorem;
	} else if (newClickedDivId === "news") {
		console.log("you clicked Repository Tab");
		newClickedDiv = tabRepository;
	}
	
	curClickedDiv.className = "tab";
	newClickedDiv.className = "selectedTab";
	curClickedDiv = newClickedDiv;

	getAjax(newClickedDivId);
}

function getAjax(tabInfo) {
	var oReq = new XMLHttpRequest();
	var basicURL = "http://jsonplaceholder.typicode.com/posts/";
	var newURL = "none"; 

	if (tabInfo === "position") {
		newURL = basicURL + "1"; 
	} else if (tabInfo === "friend") {
		newURL = basicURL + "2";
	} else if (tabInfo === "theme") {
		newURL = basicURL + "3";
	} else if (tabInfo === "news") {
		newURL = basicURL + "4";
	}
	console.log(newURL);

	var result = "";
	oReq.addEventListener('load', function() {
		objResult = this;
		//console.log(this.responseText);
		var	result = this.responseText;
		var objResult = JSON.parse(result);

		var title = document.querySelector(".myName");
		var body = document.querySelector(".myDesc");

		title.innerHTML = objResult.title;
		body.innerHTML = objResult.body;

		console.log(result);
		var objD
		return result;
	});	

	oReq.open("GET", newURL);
	oReq.send();
}