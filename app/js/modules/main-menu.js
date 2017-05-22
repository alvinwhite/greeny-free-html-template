import PubSub from 'pubsub-js';
import { TweenLite, TimelineLite } from 'gsap';

const menuItems = document.querySelectorAll('.main-menu__item');

PubSub.subscribe('init', initMainMenu);

function initMainMenu() {

	attachMenuItemsListeners();

}

function attachMenuItemsListeners() {

	var showSubTl, isClicked;


	menuItems.forEach((item) => {

		var subMenu = item.querySelector('.main-menu__sub-menu');
		var containsSub = Boolean(subMenu);


		if (containsSub) {

			showSubTl = new TimelineLite({ paused: true })
				.from(subMenu, 0.1, {
					opacity: 0
				});

			item.addEventListener('mouseenter', handleMenuItemMouseEnter);
			item.addEventListener('mouseleave', handleMenuItemMouseLeave);
			item.addEventListener('click', handleMenuItemClick);

		}

	});

	function handleMenuItemClick(e) {

		e.preventDefault();


		var subMenu = this.querySelector('.main-menu__sub-menu');
		var moreBtn = this.querySelector('.main-menu__more-button');
		var isActive = subMenu.classList.contains('main-menu__sub-menu--active');

		this.removeEventListener('mouseenter', handleMenuItemMouseEnter);
		this.removeEventListener('mouseleave', handleMenuItemMouseLeave);		

				if(isActive) {

					if(isClicked) {

						showSubTl.reverse();
						subMenu.classList.remove('main-menu__sub-menu--active');
						moreBtn.classList.remove('more-button--active');

						this.addEventListener('mouseenter', handleMenuItemMouseEnter);
						this.addEventListener('mouseleave', handleMenuItemMouseLeave);

						isClicked = false;

					} else {

						moreBtn.classList.add('more-button--active');
						isClicked = true;

					}

				} else {

					subMenu.classList.add('main-menu__sub-menu--active');
					moreBtn.classList.add('more-button--active');

					showSubTl.play();
					isClicked = true;

				}

	}

	function handleMenuItemMouseEnter(e) {

		var menuLink = this.querySelector('.main-menu__link') || false;
		var subMenu = this.querySelector('.main-menu__sub-menu') || false;
		var moreBtn = this.querySelector('.main-menu__more-button') || false;

		if (subMenu) {
			showSubTl.call(() => {
				subMenu.classList.add('main-menu__sub-menu--active');
			});
			showSubTl.play();
		}


	}

	function handleMenuItemMouseLeave(e) {

		var menuLink = this.querySelector('.main-menu__link') || false;
		var subMenu = this.querySelector('.main-menu__sub-menu') || false;
		var moreBtn = this.querySelector('.main-menu__more-button') || false;

		if (subMenu) {
			showSubTl.reverse();
			showSubTl.call(() => {
				subMenu.classList.remove('main-menu__sub-menu--active');
			});
		}

	}

}

export default initMainMenu;