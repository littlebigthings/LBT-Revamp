import morphSVG from './MorphSVGPlugin.js'
let paths = document.querySelectorAll("[data-line]")
let pathObj = {
    one: "M0 23C4.2339 12.7386 9.07265 3.24798 33.8712 0",
    two: "M0 64C12.168 43.9325 67.9381 0.000673318 113.568 0",
    three: "M0 126C34.2282 94.5236 37.3399 71.1516 63.7889 58.7196C90.238 46.2877 122.392 58.7196 163.881 34.353C205.369 9.98636 214.186 0 214.186 0",
    fourth: "M0 186C24.9856 122.457 54.1155 94.1784 137.92 94.1784C174.899 94.1784 229.867 118.079 281.837 65.9317C333.807 13.7839 385.277 -0.00132412 465.231 8.09221e-08",
    fifth: "M125.523 213C212.193 162.216 268.479 162.216 316.795 95.4999C365.112 28.7835 488.061 59.3382 526 122.73",
    sixth: "M226.14 213C346.184 213 423.888 89.5 479.178 213",
}
let timeline = gsap.timeline({defaults:{
    ease: "linear",
    duration: 2,
    repeat: -1,
    yoyo: true,
}});

function animateWaves(){
    paths.forEach(wave => {
        if(wave.getAttribute("data-line") == 0){
            timeline.to(wave, {morphSVG:pathObj.one},"-=2");
        }
        else if(wave.getAttribute("data-line") == 1){
            timeline.to(wave, {morphSVG:pathObj.two},"-=2");
        }
        else if(wave.getAttribute("data-line") == 2){
            timeline.to(wave, {morphSVG:pathObj.three},"-=2");
        }
        else if(wave.getAttribute("data-line") == 3){
            timeline.to(wave, {morphSVG:pathObj.fourth},"-=2");
        }
        else if(wave.getAttribute("data-line") == 4){
            timeline.to(wave, {morphSVG:pathObj.fifth},"-=2");
        }
        else if(wave.getAttribute("data-line") == 5){
            timeline.to(wave, {morphSVG:pathObj.sixth},"-=2");
        }
    })
}
animateWaves();