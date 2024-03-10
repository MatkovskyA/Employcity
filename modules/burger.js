const body = document.querySelector("body");
const navMobileMenu = document.querySelector(".burger-wrapper");
const btnBurgerOpen = document.querySelector(".nav-btn__wrapper");
const btnBurgerClose = document.querySelector(".nav-btn__close");
const burgerContent = document.querySelector(".nav-burger__content");

function showNavMenu() {
  btnBurgerOpen.addEventListener("click", () => {
    navMobileMenu.classList.add("burger-wrapper__open");
    body.classList.add("fixed");
  });
  btnBurgerClose.addEventListener("click", () => {
    navMobileMenu.classList.remove("burger-wrapper__open");
    body.classList.remove("fixed");
  });

  navMobileMenu.addEventListener("click", (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContent);

    if (isClickOutsideContent) {
      navMobileMenu.classList.remove("burger-wrapper__open");
      body.classList.remove("fixed");
    }
  });
}

export default showNavMenu;
