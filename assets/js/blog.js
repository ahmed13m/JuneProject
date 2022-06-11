function fn() {
	document.getElementById("preloader") &&
		setTimeout(() => {
			(document.getElementById("preloader").style.visibility = "hidden"),
				(document.getElementById("preloader").style.opacity = "0");
		}, 350),
		activateMenu();
}
function toggleMenu() {
	document.getElementById("isToggle").classList.toggle("open");
	var e = document.getElementById("navigation");
	"block" === e.style.display
		? (e.style.display = "none")
		: (e.style.display = "block");
}
