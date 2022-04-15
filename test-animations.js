import morphSVG from './MorphSVGPlugin.js';
import drawSVG from './DrawSVGPlugin.js';
function animateCircle() {
    let circles = document.querySelectorAll("[data-animate]");
    if (circles.length > 0) {
        circles.forEach((circle, index) => {
            if (index == 0) gsap.from(circle.querySelector("circle"), { fill: "#F288E0", duration: 1, repeat: -1, yoyo: true });
            if (index == 1) gsap.from(circle.querySelector("circle"), { fill: "#3D278C", duration: 1, repeat: -1, yoyo: true });
        })
    }
}

function animateCards() {
    let squareOne = document.querySelector(".sq-one");
    let squareTwo = document.querySelector(".sq-two");
    let cards = document.querySelector(".circle");
    let timeline = gsap.timeline({ defaults: { ease: "power4.inOut", } });
    if (cards != undefined && squareOne != undefined && squareTwo != undefined) {
        timeline.paused(true)
        timeline.to(squareOne, { x: "20px", duration: 0.3 });
        timeline.to(squareTwo, { x: "-20px", duration: 0.3 }, "-=0.3");
        cards.addEventListener('mouseenter', () => {
            timeline.play();
        })
        cards.addEventListener("mouseleave", () => {
            timeline.reverse();
        })
    }
}

function animateProcess() {
    let section = document.querySelectorAll(".wrapper")[1];
    let container = document.querySelectorAll("[data-wrapper='process']");
    let icon = document.querySelectorAll("[data-icon='video']");
    let rect = document.querySelectorAll("[data-block='rect']");
    let circle = document.querySelectorAll("[data-circle='round']");
    let digit = document.querySelectorAll("[data-digit='number']");
    let leftText = document.querySelectorAll(".process-text");
    let rightText = document.querySelectorAll(".process-para");
    let timeline = gsap.timeline({ defaults: { ease: "circ.out" } });
    if (icon != undefined && rect != undefined) {
        timeline.set(section, {opacity:0})
        ScrollTrigger.create({
            trigger: section,
            markers: true,
            start: "top 30%",
            onEnter: self => {
                timeline.to(section, {opacity:1})
                container.forEach((item, index) => {
                    timeline.from(item, {width:"0%", duration:0.5})
                    timeline.from(circle[index], {drawSVG:"0% 0%", duration:0.8},"-=0.5");
                    timeline.from(digit[index], {y:"10px", opacity:0, duration:0.5},"-=0.8");
                    timeline.from(leftText[index], {y:`${leftText[index].clientHeight}`, duration:1},"-=0.5")
                    timeline.from(rect[index], {y:`${rect[index].clientHeight}`,},"-=1");
                    timeline.from(rightText[index], {y:`${rightText[index].clientHeight}`, duration:1},"-=0.9")
                })
                // timeline.to(section, {opacity:1})
                // timeline.from(container, { width: "0%", duration: 0.5, stagger:0.2})
                // timeline.from(circle, { drawSVG: "0% 0%", duration: 1, stagger:0.2}, "-=1.8");
                // timeline.from(digit, { y: "10px", opacity: 0, duration: 0.5, stagger:0.5 }, "-=3.8");
                // timeline.from(leftText, { x: "-250px", duration: 0.5, stagger:0.5 }, "-=1.8")
                // timeline.from(rect, { y:"80px", duration:0.5, stagger:0.5}, "-=1.8");
                // timeline.from(rightText, { y:"80px", duration: 1, stagger:0.5 }, "-=1.8")
                self.disable();
            }
        })
    }
}

function animateShapes(){
    let circle = document.querySelectorAll("[data-shape='circle']");
    let square = document.querySelectorAll("[data-shape='square']");
    let boxTop = document.querySelector("[data-box='top']");
    let boxBtm = document.querySelector("[data-box='btm']");
    let circleTop = document.querySelector("[data-circle='top']");
    let circleBtm = document.querySelector("[data-circle='btm']");
    let timeline = gsap.timeline({ defaults: { ease: "sine.out" } });
    timeline.from(circle, {
        rx:"16",
        duration:2,
        repeat:-1,
        yoyo:true,
        stagger:0.5,
    })
    timeline.from(square, {
        rx:51.9,
        duration:2,
        repeat:-1,
        yoyo:true,
        stagger:0.5,
    },"+=2")
    timeline.from(boxTop, {
        y:"60",
        duration:2,
        repeat:-1,
        yoyo:true,
    },"-=2")
    timeline.from(boxBtm, {
        x:"60",
        duration:2,
        repeat:-1,
        yoyo:true,
    },"-=2")
    // timeline.to(circleTop, {
    //     stroke:"#F288E0",
    //     duration:2,
    //     repeat:-1,
    //     yoyo:true,
    // },"-=2")
    timeline.to(circleBtm, {
        // stroke:"#3D278C",
        x:"-18px",
        y:"-40px",
        duration:2,
        repeat:-1,
        yoyo:true,
    },"-=2")
}
animateCircle();
animateCards();
animateProcess();
animateShapes();