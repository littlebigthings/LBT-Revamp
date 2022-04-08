// import { SplitText } from './SplitText.js';
const tl = gsap.timeline();
// gsap.registerPlugin(SplitText);
function animateHeads() {
    let sectionHeadings = document.querySelectorAll(".heading-40");
    if (sectionHeadings.length > 0) {
        sectionHeadings.forEach(head => {
            tl.set(head, { opacity: 0 })
            ScrollTrigger.create({
                trigger: head,
                // markers: true,
                start: "top 60%",
                onEnter: self => {
                    tl.fromTo(head, {
                        opacity: 0,
                        filter: blur(4),
                        y: "10px",
                    }, {
                        duration: 0.6,
                        opacity: 1,
                        filter: blur(0),
                        y: 0,
                        transformOrigin: "bottom",
                        ease: "circ.out",
                    });
                    self.disable();
                }
            })
        })
    }
}
function animateHeroHeading() {
    let secondHead = document.querySelector(".hero-link-block");
    let container = document.querySelector(".anim-txt-wrp");
    let allHeads = container.childNodes;
    tl.set(container, { opacity: 0 })
    ScrollTrigger.create({
        trigger: container,
        // markers: true,
        start: "top 60%",
        onEnter: self => {
            tl.to(container, { opacity: 1 })
            tl.fromTo(allHeads, {
                opacity: 0,
                filter: blur(4),
                y: "10px",
            }, {
                duration: 0.6,
                opacity: 1,
                filter: blur(0),
                y: 0,
                transformOrigin: "bottom",
                ease: "circ.out",
            });
            tl.from(secondHead, {
                opacity: 0,
                filter: blur(4),
                y: "10px",
                transformOrigin: "bottom",
                duration: 0.3,
                ease: "circ.out",
                delay: 0.5,
            })
            self.disable();
        }
    })
}

function navigationAnimation() {
    let navTl = gsap.timeline({ defaults: { duration: 1, ease: 'back.out(1.7)' } });
    let mainNav = document.querySelector(".navigation-section");
    let navBtn = mainNav.querySelectorAll(".nav-toggle");
    let navMenu = mainNav.querySelector(".navbar-wrapper");
    let links = navMenu.children;
    let primaryCta = mainNav.querySelectorAll(".primary-cta.nav-cta")[1];
    // navTl.set(links, {opacity:0});
    navTl.paused(true);
    // navTl.to(mainNav,{clipPath:"circle(150% at 80% 20%)"})
    // navTl.to(mainNav,{clipPath:"circle(0% at 100% 0%)"}).to(mainNav, {clipPath:"circle(150% at calc(100% - (1rem + max(20px, 0.33333rem))) calc(max(40px, 0.66667rem) + max(20px, 0.33333rem)))"})
    navTl.to(navMenu, { display: "flex", duration: 0})
    navTl.to(navMenu, { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, duration: 0, backgroundColor: "#3D278C", zIndex: 9999 });
    navTl.to(navMenu, { clipPath: "circle(100%)"});
    // navTl.to(primaryCta, { color: "#F2F2F2", duration: 0 }, "-=1");
    // navTl.to(logoText, { color: "#F2F2F2", duration: 0 }, "-=1");
    // navTl.to(navBtn, { borderColor: "#F2F2F2", duration: 0 }, "-=1");
    navTl.fromTo(links, { opacity: 0, y: '-30px' }, { opacity: 1, y: 0, stagger: 0.2 },"-=1")
    if (navBtn.length > 0) {
        navBtn.forEach(btn => {
            btn.setAttribute('isActive', false)
            btn.addEventListener('click', () => {
                if (btn.getAttribute('isActive') == "false") {
                    navTl.play();
                    // mainNav.classList.add("nav-active");
                    // navMenu.classList.remove("hide");
                    navBtn.forEach(btn => btn.setAttribute('isActive', true));
                }
                else {
                    navTl.reverse(0.2);
                    // primaryCta.removeAttribute("style")
                    // setTimeout(() => {
                    // mainNav.classList.remove("nav-active");
                    // navMenu.classList.add("hide");
                    navBtn.forEach(btn => btn.setAttribute('isActive', false));
                    // }, 1000)
                }
            })
        })
    }

    if(window.screen.width < 768){
        primaryCta.style.marginTop = "4em"
        primaryCta.style.display = 'block';
        navMenu.appendChild(primaryCta)
    }
}
navigationAnimation();
animateHeroHeading();
animateHeads();