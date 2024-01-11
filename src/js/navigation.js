//Navigation working

//data
const burger = document.querySelector(".c-header__hamburger");
const navigation = document.querySelector(".nav");
// const liServices = document.querySelector('[data-index="services"]');
const liContact = document.querySelector('[data-index="contact"]');
// const services = document.querySelector(".nav__services");
const wrapperLeft = document.querySelector(".nav__wrapper__left");
const contact = document.querySelector(".s-contact__header");
const contactHeader = document.querySelector(".c-header__contact");
const navigationList = document.querySelectorAll(".nav__wrapper__left li");
const navFooter = document.querySelector(".nav__footer");
const main = document.querySelector("main");
const headingWrapper = document.querySelector(".c-header__container ");
const openMenuContact = document.querySelectorAll(".open-menu-contact");
const openBottomContact = document.querySelectorAll(".open-bottom-contact");
const burgerAn = burger.firstChild.nextSibling;
const contactForm = document.querySelector("#contact");
const allHeader = document.querySelector(".c-header");
const hamburgerMenu = document.querySelector(".c-header__hamburger__lines");
const logo = document.querySelector(".c-main-logo");
allHeader.classList.add("c-header--open");
const body = document.querySelector("body");

//Hidden navbar opition during scroll
document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 10) {
    contactHeader.classList.add("hidden");
    allHeader.classList.add("headerBackground");
  } else {
    contactHeader.classList.remove("hidden");
    allHeader.classList.remove("headerBackground");
  }
});

//'contact us' btn whitch open contact form menu
openMenuContact.forEach((element) => {
  element.addEventListener("click", () => {
    contactHeader.classList.add("hidden");
    allHeader.style.transform = "translateY(0)";
    burgerAn.classList.add("c-header__hamburger__lines--open");
    body.classList.add("overflow");

    setTimeout(() => {
      navigation.classList.add("nav__open");
      openContact();
    }, 500);
  });
});

//open bottom contact
openBottomContact.forEach((element) => {
  element.addEventListener("click", () => {
    const contact = document.querySelector("#before-contact");
    window.scrollTo(0, contact.offsetTop, 600);
  });
});

// close menu on click next to menu
document.querySelector("main").addEventListener("click", () => {
  if (navigation.classList.contains("nav__open")) {
    closeMenu();
  }
});

//open menu
burger.addEventListener("click", () => {
  //close by arrow
  if (navigation.classList.contains("nav__open")) {
    closeMenu();
  } else {
    //open by hamburger
    document.removeEventListener("scroll", scrollHeader);


    body.classList.add("overflow");
    navigation.classList.toggle("nav__open");
    burgerAn.classList.add("c-header__hamburger__lines--open");
    contactHeader.classList.add("hidden");
    hamburgerMenu.classList.remove("background-black");
    burgerAn.classList.remove("background-black");
    logo.classList.remove("c-main-logo--dark");
  }
});

//click services
// liServices.addEventListener("click", openServices);
//click contact
liContact.addEventListener("click", openContact);

//Open Menu Services
function openServices() {
  // services.classList.add("visible");
  outlineElements();
  // liServices.parentElement.classList.remove("st-outline");
  // liServices.classList.add("st-boldArrow--focus");
  liContact.classList.remove("st-boldArrow--focus");
  // services.classList.add("opacity");
  navigation.classList.add("nav__full");
  contact.classList.remove("visible");
  contact.classList.remove("opacity");
  setTimeout(() => {
    // services.classList.add("transformation-mobile");
  }, 100);
}

function openContact() {
  console.log(navigation)
  contact.classList.add("visible");
  outlineElements();
  navFooter.classList.add("nav__footer--active");
  liContact.parentElement.classList.remove("st-outline");
  liContact.classList.add("st-boldArrow--focus");
  // liServices.classList.remove("st-boldArrow--focus");

  contact.classList.add("opacity");
  navigation.classList.add("nav__full");
  // services.classList.remove("visible");
  // services.classList.remove("opacity");
  setTimeout(() => {
    contact.classList.add("transformation-mobile");
  }, 100);
}

//outline for all liElements
function outlineElements() {
  navigationList.forEach((el) => {
    el.classList.add("st-outline");
    // el.firstChild.classList.remove('st-boldArrow--focus')
  });
}

//removing outline
function outlineElementsReverse() {
  navigationList.forEach((el) => {
    el.classList.remove("st-outline");
  });
}
//hamburger animation
burger.addEventListener("mouseover", () => {
  if (!burgerAn.classList.contains("c-header__hamburger__lines--open")) {
    burgerAn.classList.add("c-header__hamburger__lines--active");
  } else {
    burgerAn.classList.add("c-header__hamburger__lines--open--hover");
  }
});
burger.addEventListener("mouseout", () => {
  if (!burgerAn.classList.contains("c-header__hamburger__lines--open")) {
    burgerAn.classList.remove("c-header__hamburger__lines--active");
  } else {
    burgerAn.classList.remove("c-header__hamburger__lines--open--hover");
  }
});

//close Menu
function closeMenu() {
  burgerAn.classList.remove("c-header__hamburger__lines--open");
  burgerAn.classList.remove("c-header__hamburger__lines--open--hover");
  // liServices.classList.remove("st-boldArrow--focus");
  liContact.classList.remove("st-boldArrow--focus");
  navFooter.classList.remove("nav__footer--active");
  headingWrapper.classList.remove("c-header__container--active");
  navigation.classList.toggle("nav__open");
  navigation.classList.remove("nav__full");
  contact.classList.remove("nav__full");
  // services.classList.remove("visible");
  contact.classList.remove("visible");
  // services.classList.remove("transformation-mobile");
  contact.classList.remove("transformation-mobile");
  body.classList.remove("overflow");
  // closeForm();
  outlineElementsReverse();
  document.addEventListener("scroll", scrollHeader);

  if (!allHeader.classList.contains("headerBackground")) {
    contactHeader.classList.remove("hidden");
  }
  if ((window.scrollTop == 0) & main.classList.contains("case-study")) {
    burgerAn.classList.add("background-black");
    logo.classList.add("c-main-logo--dark");
  }
}

const startBtn = document.querySelector(".buttonParallax");
const projectInfo = document.querySelector(".s-project__info");

let oldValue = 0;
let newValue = 0;
let direction = 0;
let flag = 0;

document.addEventListener("scroll", scrollHeader);

function scrollHeader() {
  newValue = document.documentElement.scrollTop;

  if (oldValue < newValue && oldValue > 0) {
    if (flag === 0) {
      flag = 1;
      allHeader.classList.remove("headerBackground");
      allHeader.style.transform = "translateY(-100%)";
      contactHeader.classList.add("hidden");
      setTimeout(() => {}, 4000);
      return;
    }
  } else if (oldValue > newValue) {
    if (flag === 1) {
      flag = 0;

      allHeader.classList.add("headerBackground");
      allHeader.style.transform = "translateY(0)";
      return;
    }
  }
  oldValue = newValue;
  return;
}