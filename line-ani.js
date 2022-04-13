import morphSVG from './MorphSVGPlugin.js'
let paths = document.querySelectorAll("[data-line]")
let pathObj = {
    one: "M3 23.231C6.5 13.5 10.5 4.5 31 1.41992",
    two: "M2.5 62.6763C14.5 43.6145 69.5 1.88443 114.5 1.88379",
    three: "M3 127.149C36 95.5 39 72 64.5 59.5C90 47 121 59.5 161 35C201 10.5 209.5 0.458984 209.5 0.458984",
    fourth: "M1 187.477C26 123.903 55.1468 95.6107 139 95.6107C176 95.6107 231 119.523 283 67.3503C335 15.1772 386.5 1.38539 466.5 1.38672",
    fifth: "M127 213.5C214 162.5 270.5 162.5 319 95.5002C367.5 28.5001 490.917 59.1847 529 122.846",
    sixth: "M228 213C348.5 213 426.5 89.5 482 213",
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