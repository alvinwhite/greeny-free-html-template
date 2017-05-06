function getShowSearchBarTl(line, input, btn, searchBar) {

	if(!line || !input || !searchBar) return false;

	var tl = new TimelineLite({paused: true});

	tl
		.call(toggleVisibility, [searchBar])
		.from(line, 0.6, {width: '0%' })
		.from(input, 0.5, { autoAlpha: 0 });
		
		if (btn) {
			tl.from(btn, 0.8, { autoAlpha: 0, rotationX: 360 }, "-=0.8");
		}

	return tl;

}

function toggleVisibility(searchBar) {
	searchBar.classList.toggle('search-bar--visible');
	searchBar.classList.toggle('search-bar--hidden');
}

export {getShowSearchBarTl as default, toggleVisibility as toggleSbVisibility};