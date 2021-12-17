function closeShop() {
	document.getElementById("shopDiv").className="hide";
}

function closeAboutUs() {
	document.getElementById("aboutusDiv").className="hide";
}

function closeViewLogo() {
	document.getElementById("logoViewer").className="hide";
}


function aboutUs() {
	document.getElementById("aboutusDiv").className="aboutusDiv";
	closeShop();
	closeViewLogo();
}

function shop() {
	document.getElementById("shopDiv").className="shopDiv";
	closeAboutUs();
	closeViewLogo();
}

function viewLogo() {
	document.getElementById("logoViewer").className="logoViewer";
	closeAboutUs();
	closeShop();
}
