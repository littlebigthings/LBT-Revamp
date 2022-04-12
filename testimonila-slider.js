class TESTIMONIALSLIDER {
    constructor(compontent, pagination, [prev, next]) {
        this.slider = null;
        this.sliderToAdd = compontent;
        this.paginationWrapper = pagination;
        this.paginationItem = this.paginationWrapper.childNodes[0];
        this.next = next;
        this.prev = prev;
        this.activeClass = 'active-dot';
        this.init();
    }

    init() {
        this.startSlider();
    }

    startSlider() {
        this.slider = $(this.sliderToAdd).slick({
            dots: false,
            slidesToScroll: 1,
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 200,
            fade: true,
            cssEase: "linear",
            arrows: true,
            prevArrow: this.prev,
            nextArrow: this.next,
            appendDots: this.paginationWrapper,
            breakpoint: 480,
            settings: {
                arrows: false,
            }
        });
        //get the length of the slider dots. 
        const sliderLength = this.slider.find(".slick-slide").length;
        this.paginationWrapper.innerHTML = "";
        //add dots based on the number of slides.
        for (let i = 0; i < sliderLength; i++) {
            this.paginationWrapper.appendChild(this.paginationItem.cloneNode(true));
        }
        // replace the old dots array to new one -> animate.
        this.$newPaginationItems = this.paginationWrapper.childNodes;
        // initial it starts from the first dot.
        this.addRemoveActive();
        // adding event listener into the dots, reviews.
        this.$newPaginationItems.forEach(item => {
            item.addEventListener("click", (e) => {
                const currIdx = [...e.currentTarget.parentElement.children].indexOf(e.currentTarget)
                this.slider.slick("slickGoTo", currIdx);
                this.addRemoveActive(currIdx);
            })
        })
        // on swipe event.
        this.slider.on("swipe", (event, slick, direction) => {
            if (direction === "right") {
                this.addRemoveActive(slick.currentSlide);
            } else if (direction === "left") {
                this.addRemoveActive(slick.currentSlide);
            }
        })
        // show component one by one.
        this.slider.on('afterChange', (event, slick, currentSlide, nextSlide) => {
            this.addRemoveActive(currentSlide)
        });
    }
    // remove and add active class into the dots.
    addRemoveActive(index = 0) {
        this.$newPaginationItems.forEach(item => item.classList.remove(this.activeClass));
        this.$newPaginationItems[index].classList.add(this.activeClass);
    }
}

let component = document.querySelector("[data-carousel='testimonial']"),
    pagination = document.querySelector("[data-dot='wrapper']"),
    [prev, next] = document.querySelectorAll("[data-ctrl]")

if (component != null || component != undefined && pagination != null || pagination != undefined) {
    new TESTIMONIALSLIDER(component, pagination, [prev, next]);
}