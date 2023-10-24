document.addEventListener("DOMContentLoaded", function(e){
	let navTaggleBtn = document.querySelector(".nav--site-toggle");
	let responsiveElmsToHide = document.querySelectorAll(".skip-link, header, main, footer");
	
	navTaggleBtn.addEventListener("click", toggleSiteNav, false);

	function toggleSiteNav(e){
		let elm = e.currentTarget;
		if (elm.getAttribute("aria-expanded") === "false"){
			openNav(e);
		}
		else{
			closeNav(e);
		}
	}

	function openNav(){
		navTaggleBtn.setAttribute("aria-expanded", "true");
		for(let i=0;i<responsiveElmsToHide.length;i++){
			responsiveElmsToHide[i].setAttribute("hidden", "");
		}
	}

	function closeNav(){
		navTaggleBtn.setAttribute("aria-expanded", "false");
		for(let i=0;i<responsiveElmsToHide.length;i++){
			responsiveElmsToHide[i].removeAttribute("hidden");
		}
		navTaggleBtn.focus();
	}

	let ro = new ResizeObserver(entries => {
		for (let entry of entries) {
			const cr = entry.contentRect;
			if(cr.width <= 560){
				document.querySelector("body").classList.add("responsive-nav");
				window.addEventListener("keyup", closeNavOnEsc, false);
			}
			else{
				document.querySelector("body").classList.remove("responsive-nav");
				window.removeEventListener("keyup", closeNavOnEsc, false);
			}
		}
	});

	function closeNavOnEsc(e){
		if(e.key === "Escape"){
			closeNav();
		}
	}
	
	// Observe one or multiple elements
	ro.observe(document.querySelector("body"));

});
