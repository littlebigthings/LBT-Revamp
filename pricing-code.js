let toggleBtn = document.querySelector("[data-btn='toggle']");
let onIndicator = document.querySelector("[data-btn='on']");
let offIndicator = document.querySelector("[data-btn='off']");
let toggleHandle = document.querySelector("[data-btn='handle']");
let monthlyPrice = document.querySelectorAll("[display-item='monthly']");
let annualPrice = document.querySelectorAll("[display-item='annual']");
let timeline = gsap.timeline();
timeline.paused(true)

function togglePrice() {
    if (toggleBtn != undefined) {
        timeline.to(toggleHandle, {
            right: '0.556em',
            left: `${window.getComputedStyle(toggleHandle).right}`,
            backgroundColor: '#3d278c',
            duration: 0.25,
        })
        timeline.to(onIndicator, {
            opacity: 1,
            duration: 0.2,
        }, "-=0.2")
        timeline.to(offIndicator, {
            opacity: 0,
            duration: 0.2,
        }, "-=0.2")
        toggleBtn.addEventListener("click", () => {
            if (!toggleBtn.classList.contains("active")) {
                timeline.play();
                toggleBtn.classList.add("active");
                if (annualPrice.length > 0 && monthlyPrice.length > 0) {
                    annualPrice.forEach(item => item.classList.remove("hide"));
                    monthlyPrice.forEach(item => item.classList.add("hide"))
                }

            }
            else if (toggleBtn.classList.contains("active")) {
                toggleBtn.classList.remove("active");
                timeline.reverse();
                annualPrice.forEach(item => item.classList.add("hide"));
                monthlyPrice.forEach(item => item.classList.remove("hide"))
            }
        })
    }
}

togglePrice();