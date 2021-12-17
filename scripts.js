
function closeShop() {
	document.getElementById("shopDiv").className="hide";
}

function closeAboutUs() {
	document.getElementById("aboutusDiv").className="hide";
}


function aboutUs() {
	document.getElementById("aboutusDiv").className="aboutusDiv";
	closeShop();
}

function shop() {
	document.getElementById("shopDiv").className="shopDiv";
	closeAboutUs();
}
