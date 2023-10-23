document.addEventListener("DOMContentLoaded", function(e){
	let navTaggleBtn = document.querySelector(".nav--site-toggle");
	let responsiveElmsToHide = document.querySelectorAll(".skip-link, header, main, footer");
	
	navTaggleBtn.addEventListener("click", toggleSiteNav, false);

	function toggleSiteNav(e){
		let elm = e.currentTarget;
		if (elm.getAttribute("aria-expanded") === "false"){
			elm.setAttribute("aria-expanded", "true");
			for(let i=0;i<responsiveElmsToHide.length;i++){
				responsiveElmsToHide[i].setAttribute("hidden", "");
			}
		}
		else{
			elm.setAttribute("aria-expanded", "false");
			for(let i=0;i<responsiveElmsToHide.length;i++){
				responsiveElmsToHide[i].removeAttribute("hidden");
			}
		}
	}

	let ro = new ResizeObserver(entries => {
		for (let entry of entries) {
			const cr = entry.contentRect;
			if(cr.width <= 560){
				document.querySelector("body").classList.add("responsive-nav");
			}
			else{
				document.querySelector("body").classList.remove("responsive-nav");
			}
		}
	});
	
	// Observe one or multiple elements
	ro.observe(document.querySelector("body"));

});
