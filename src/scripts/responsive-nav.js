document.addEventListener("DOMContentLoaded", function(e){
	const navTaggleBtn = document.querySelector(".nav--site-toggle");
	
	navTaggleBtn.addEventListener("click", toggleSiteNav, false);

	function toggleSiteNav(e){
		let elm = e.currentTarget;
		if (elm.getAttribute("aria-expanded") === "false"){
			elm.setAttribute("aria-expanded", "true");
		}
		else{
			elm.setAttribute("aria-expanded", "false");
		}
	}
});