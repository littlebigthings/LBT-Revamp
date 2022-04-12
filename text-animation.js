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

animateHeroHeading();
animateHeads();