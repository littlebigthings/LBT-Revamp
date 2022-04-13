import morphSVG from './MorphSVGPlugin.js'
let paths = document.querySelectorAll("[data-line]")
let pathObj = {
    one: "M3 21.4093C19.5 20.0984 11 3.02054 31 1.34277",
    two: "M2.5 57.6995C14.5 40.1624 69.5 1.77012 114.5 1.76953",
    three: "M3 117.015C26 68.3435 43 68.3435 94.5 68.3435C146 68.3435 167.5 43.5806 167.5 43.5806C167.5 43.5806 192 20.5255 209.5 0.458984",
    fourth: "M1 172.518C26 114.03 55.1468 88 139 88C176 88 231 110 283 62C335 14 386.5 1.31128 466.5 1.3125",
    fifth: "M84.5 178.5C200.5 166 241 155.662 320.5 107.196C400 58.7291 491.5 56.8192 528.5 107.196",
    sixth: "M187 181.058C307.5 181.058 366.5 125.985 441 181.058",
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