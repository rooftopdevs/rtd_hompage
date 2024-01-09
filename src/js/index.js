//All animations on elements whitch should visible during scroll
const buttons = document.querySelectorAll(".c-btn");
buttons.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        if (btn.firstElementChild) {
            btn.firstElementChild.classList.contains("arrowDark") === true
                ? btn.firstElementChild.classList.add("longDark")
                : btn.firstElementChild.classList.add("long");
        }
    });
    btn.addEventListener("mouseout", () => {
        if (btn.firstElementChild) {
            btn.firstElementChild.classList.contains("arrowDark") === true
                ? btn.firstElementChild.classList.remove("longDark")
                : btn.firstElementChild.classList.remove("long");

            btn.firstElementChild.classList.remove("long");
        }
    });
});

// //fadeup
function fadeUp() {
    const items = document.querySelectorAll(".js-fade-up");
    const options = {rootMargin: "0px 0px -25px 0px"};

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);
            }
        });
    }, options);

    items.forEach((item) => {
        observer.observe(item);
    });
}

fadeUp();

function fadeUp2() {
    const items = document.querySelectorAll(".js-fade-up2");
    const options = {rootMargin: "0px 0px -25px 0px"};

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);
            }
        });
    }, options);

    items.forEach((item) => {
        observer.observe(item);
    });
}

fadeUp2();

//fadeDown
function fadeDown() {
    const items = document.querySelectorAll(".js-fade-down");
    const options = {rootMargin: "0px 0px -25px 0px"};

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);
            }
        });
    }, options);

    items.forEach((item) => {
        observer.observe(item);
    });
}

fadeDown();

//fade Up Right
function fadeUpRight() {
    const items = document.querySelectorAll(".js-fadeUp-right");
    const options = {rootMargin: "0px 0px -25px 0px"};

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);
            }
        });
    }, options);

    items.forEach((item) => {
        observer.observe(item);
    });
}

fadeUpRight();

//fade Up Left
function fadeUpLeft() {
    const items = document.querySelectorAll(".js-fadeUp-left");
    const options = {rootMargin: "0px 0px -25px 0px"};

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                }
            });
        });
    }, options);

    items.forEach((item) => {
        observer.observe(item);
    });
}

fadeUpLeft();

//fade left
function fadeLeft() {
    const items = document.querySelectorAll(".js-fade-left");
    const options = {rootMargin: "0px 0px -25px 0px"};

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);
            }
        });
    }, options);

    items.forEach((item) => {
        observer.observe(item);
    });
}

fadeLeft();

function fadeLeft2() {
    const items = document.querySelectorAll(".js-fade-left2");
    const options = {rootMargin: "0px 0px -25px 0px"};

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);
            }
        });
    }, options);

    items.forEach((item) => {
        observer.observe(item);
    });
}

fadeLeft2();

//fade right
function fadeRight() {
    const items = document.querySelectorAll(".js-fade-right");
    const options = {rootMargin: "0px 0px -25px 0px"};

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    items.forEach((item) => {
        observer.observe(item);
    });
}

fadeRight();

//fade right
function step() {
    const items = document.querySelectorAll(".js-step");
    const options = {rootMargin: "0px 0px -25px 0px"};
    let number = 1;
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(`js-step--${number}`);
                number++;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    items.forEach((item) => {
        observer.observe(item);
    });
}

step();

//fade right
function underlineAnimation() {
    const items = document.querySelectorAll(".js-underlineAnimation");

    const options = {rootMargin: "0px 0px -25px 0px"};
    let number = 1;
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("st-boldUnderline__changeColor");
                number++;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    items.forEach((item) => {
        observer.observe(item);
    });
}

underlineAnimation();

function underlineAnimation2() {
    const items = document.querySelectorAll(".js-underlineAnimation2");

    const options = {rootMargin: "0px 0px -25px 0px"};
    let number = 1;
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("st-boldUnderline__changeColor2");
                number++;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    items.forEach((item) => {
        observer.observe(item);
    });
}

underlineAnimation2();

//Big heading animation
function heading() {
    const items = document.querySelectorAll(".js-heading");

    const options = {rootMargin: "0px 0px -300px 0px"};
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("entry");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    items.forEach((item) => {
        observer.observe(item);
    });
}

heading();


// Cookies

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

window.addEventListener('DOMContentLoaded', function () {
    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    waitForElm('#onetrust-consent-sdk').then((elm) => {
        const oneTrustPopup = elm,
            oneTrustPopupBtn = oneTrustPopup.querySelector('#onetrust-accept-btn-handler');
        const cookiesSettigs = document.querySelector('.optanon-show-settings-button');
        const oneTrustBanner = document.querySelector('#onetrust-banner-sdk');
        const oneTrustConsent = document.querySelector('#onetrust-consent-sdk');
        const reject = document.querySelector('#onetrust-reject-all-handler');
        const closePopup = document.querySelector('#close-pc-btn-handler')
        oneTrustPopupBtn && oneTrustPopupBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            setCookie('HideCookiesPopup', 1, 365);

            closeBanner()
        });
        reject && reject.addEventListener('click', () => {
            closeBanner();
        })
        closePopup.addEventListener('click', () => {
            oneTrustConsent.classList.remove('visible');
        })
        cookiesSettigs && cookiesSettigs.addEventListener('click', () => {
            oneTrustPopup.classList.add('visible');
            closeBanner();

        })


        getCookie('HideCookiesPopup') === '1' && closeBanner();

        function closeBanner() {
            if (!oneTrustBanner) return;
            oneTrustBanner.style.display = 'none';
        }
    });

})


const video_anim = document.body.querySelector('video.video__anim');
video_anim && setTimeout(() => {
    video_anim.play();
}, 1000);


const aiTitle = document.querySelector('.hero-ai__title');
if (aiTitle) {
  setTimeout(() => {
    aiTitle.classList.add('show-element');
    setTimeout(() => {
        aiTitle.querySelector('.hero-ai__title-end').classList.add('show-element');
    }, 100);
  }, 200);
}