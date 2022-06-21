//Появление блоков главного меню и авторизации
let body = document.body;
let bodyFader = body.querySelector(".fader");
let loginButton = document.getElementById("loginBtn");
let loginModule = document.querySelector(".login-wrapper");
let loginCloseButton = document.querySelector(".login-wrapper .close-btn");
let mainMenu = document.querySelector(".main-menu");
let openMenuButton = document.querySelector(".navbar-toggler");
let closeMenuButton = document.querySelector(".main-menu .close-btn");
let headerMenuItems = document.querySelectorAll(".main-menu .navbar-nav .nav-link");

let loginMenuHandler = function () {
	loginModule.classList.toggle("show");
	body.classList.toggle("fixed");
};

loginButton.addEventListener("click", function () {
	loginMenuHandler();
});

loginCloseButton.addEventListener("click", function () {
	loginMenuHandler();
});

let mainMenuHandler = function () {
	mainMenu.classList.toggle("show");
	body.classList.toggle("fixed");
};

openMenuButton.addEventListener("click", function () {
	mainMenuHandler();
});

closeMenuButton.addEventListener("click", function () {
	mainMenuHandler();
});

bodyFader.addEventListener("click", function () {
	if (loginModule.classList.contains("show")) {
		loginMenuHandler();
	}
	if (mainMenu.classList.contains("show")) {
		mainMenuHandler();
	}
});

headerMenuItems.forEach(function (headerMenuItem) {
	headerMenuItem.addEventListener("click", function () {
		mainMenuHandler();
	});
});

//Прилипающая шапка
let header = document.querySelector(".header");
function onWindowScroll() {
	if (window.pageYOffset > header.clientHeight / 2) {
		header.classList.add("fixed-top");
		body.style.paddingTop = header.clientHeight * 2 + "px";
	} else {
		header.classList.remove("fixed-top");
		body.style.paddingTop = 0;
	}
}
window.addEventListener("scroll", onWindowScroll);
window.addEventListener("DOMContentLoaded", onWindowScroll);

//Слайдеры
const promoSwiper = new Swiper(".promo-swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: true,
	autoplay: {
		delay: 5000,
	},
	effect: "fade",
	spaceBetween: 0,
	watchOverflow: true,
	navigation: {
		nextEl: ".promo-swiper-button-next",
		prevEl: ".promo-swiper-button-prev",
	},
	pagination: {
		el: ".promo-swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
});

const saleSwiper = new Swiper(".sale-swiper", {
	slidesPerView: 6,
	slidesPerGroup: 3,
	speed: 700,
	simulateTouch: true,
	autoplay: {
		delay: 3000,
	},
	spaceBetween: 30,
	watchOverflow: true,
	navigation: {
		nextEl: ".sale-swiper-button-next",
		prevEl: ".sale-swiper-button-prev",
	},
	pagination: {
		el: ".sale-swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		1500: {
			slidesPerView: 6,
			slidesPerGroup: 3,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 5,
			slidesPerGroup: 3,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 4.3,
			slidesPerGroup: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3.3,
			slidesPerGroup: 2,
			spaceBetween: 15,
		},
		300: {
			slidesPerView: 2.4,
			slidesPerGroup: 1,
			spaceBetween: 10,
		},
	},
});

const hitSwiper = new Swiper(".hit-swiper", {
	slidesPerView: 6,
	slidesPerGroup: 3,
	speed: 800,
	simulateTouch: true,
	autoplay: {
		delay: 3500,
	},
	spaceBetween: 30,
	watchOverflow: true,
	navigation: {
		nextEl: ".hit-swiper-button-next",
		prevEl: ".hit-swiper-button-prev",
	},
	pagination: {
		el: ".hit-swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		1500: {
			slidesPerView: 6,
			slidesPerGroup: 3,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 5,
			slidesPerGroup: 3,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 4.3,
			slidesPerGroup: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3.3,
			slidesPerGroup: 2,
			spaceBetween: 15,
		},
		300: {
			slidesPerView: 2.4,
			slidesPerGroup: 1,
			spaceBetween: 10,
		},
	},
});

const relatedSwiper = new Swiper(".related-swiper", {
	slidesPerView: 6,
	slidesPerGroup: 3,
	speed: 800,
	simulateTouch: true,
	spaceBetween: 30,
	watchOverflow: true,
	navigation: {
		nextEl: ".related-swiper-button-next",
		prevEl: ".related-swiper-button-prev",
	},
	pagination: {
		el: ".related-swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		1500: {
			slidesPerView: 6,
			slidesPerGroup: 3,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 5,
			slidesPerGroup: 3,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 4.3,
			slidesPerGroup: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3.3,
			slidesPerGroup: 2,
			spaceBetween: 15,
		},
		300: {
			slidesPerView: 2.4,
			slidesPerGroup: 1,
			spaceBetween: 10,
		},
	},
});



const sliderItemThumbs = new Swiper(".slider__thumbs--item .swiper", {
	slidesPerView: 4,
	spaceBetween: 60,
	navigation: {
		nextEl: ".slider__thumbs--item__next",
		prevEl: ".slider__thumbs--item__prev"
	},
	mousewheel: "true",
	freeMode: "true",
	breakpoints: {
		0: {
			direction: "horizontal",
            spaceBetween: 5,
            slidesPerView: 4.5,
            mousewheel: "false",
		},
		575: {
            spaceBetween: 5,
            slidesPerView: 5,
		},
		768: {
            spaceBetween: 5,
            slidesPerView: 5.5,
		},
        992: {
            spaceBetween: 5,
            slidesPerView: 4.5,
        },
        1200: {
            spaceBetween: 5,
            slidesPerView: 5.5,
			direction: "horizontal",
        },
        1400: {
            spaceBetween: 5,
            slidesPerView: 5,
			direction: "vertical",
        },
        1700: {
            spaceBetween: 5,
            slidesPerView: 5,
			direction: "vertical",
        },
        1921: {
            spaceBetween: 5,
            slidesPerView: 5,
			direction: "vertical",
        }
	}
});


const sliderItemImages = new Swiper('.slider__images--item .swiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	mousewheel: false,
	navigation: {
		nextEl: ".slider__next",
		prevEl: ".slider__prev"
	},
	grabCursor: true,
	thumbs: {
		swiper: sliderItemThumbs,
	},
	breakpoints: {
		0: {
			direction: "horizontal",
		},
		1400: {
			direction: "vertical",
		}
	}
});


//Подсчет процента скидки в скидочных товарах
document.addEventListener("DOMContentLoaded", function () {
	var oldPrices = Array.from(document.querySelectorAll(".price--old"));

	function getSalePercent(oldPrice) {
		var oldPriceContent = oldPrice;
		var newPriceContent = oldPriceContent.parentNode.querySelector(".price--new");
		if (parseInt(oldPriceContent.innerHTML) > 0) {
			var difference = parseInt(oldPriceContent.innerHTML) - parseInt(newPriceContent.innerHTML);
			var salePercent = Math.round((difference * 100) / parseInt(oldPriceContent.innerHTML));
			oldPrice.closest(".content").querySelector(".tag-percent").innerHTML = "-" + salePercent + "%";
		} else {
			oldPrice.closest(".content").querySelector(".tag-percent").innerHTML = "%";
		}
	}

	if (oldPrices.length > 0) {
		oldPrices.forEach(getSalePercent);
	}
});

//Сворачивание-разворачивание списка характеристик на странице товара
var collapseBtn = document.querySelector(".parameters-collapse-button");
var parametersList = document.querySelector(".parameters .parameters-wrapper");
var innerTable = parametersList.querySelector(".parameters-list");

if (innerTable.offsetHeight <= 200) {
	collapseBtn.remove();
} else {
	parametersList.style.height = innerTable.offsetHeight / 2 + "px";
	parametersList.classList.add("fog");
}

var parametersCollapse = function () {
	if (parametersList.style.height !== "auto") {
		parametersList.classList.remove("fog");
		collapseBtn.innerHTML = "Развернуть характеристики";
		parametersList.style.height ="auto";
	} else {
		parametersList.classList.add("fog");
		collapseBtn.innerHTML = "Свернуть характеристики";
		parametersList.style.height = innerTable.offsetHeight / 2 + "px";
	}
};
collapseBtn.addEventListener("click", function () {
	parametersCollapse();
});

//Определение необходимости ограничения высоты блока с описанием товара на странице товара
var catalogItemDescription = document.querySelector(".catalog-item-page .catalog-item-info .description");
var itemDescriptionHeightResizer = function () {
	if ((catalogItemDescription.offsetHeight > 250) && (document.documentElement.clientWidth > 991)) {
		catalogItemDescription.classList.add("max");
	} else if (document.documentElement.clientWidth < 992) {
		catalogItemDescription.classList.remove("max");
	}
};
itemDescriptionHeightResizer();


window.addEventListener("resize", function () {
	itemDescriptionHeightResizer();
});
