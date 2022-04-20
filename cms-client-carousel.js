class CLIENTSLIDER {
    constructor() {
        this.sliderTop = null;
        this.sliderBottom = null;
        this.$newPaginationItems = "";
        this.sliderItem = document.querySelector("[data-carousel='client']");
        this.init();
    }
    init() {
        this.activateSlider();
        this.checkAndPlayPause();
    }

    //function to check the section comes into view.
    isInViewport(secEle) {
        var elementTop = $(secEle).offset().top;
        var elementBottom = elementTop + $(secEle).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    checkAndPlayPause() {
        window.addEventListener("scroll", () => {
            if (this.isInViewport(this.sliderItem) && !this.isPlaying) {
                // this.sliderTop.slick("slickPlay");
                this.isPlaying = true;
            } else if (!this.isInViewport(this.sliderItem) && this.isPlaying) {
                this.sliderTop.slick("slickPause");
                this.isPlaying = false;
            }
        });
    }
    // activate slider
    activateSlider() {
        const $paginationItem = document.querySelector("[data-pagination='client']");
        // initially it will add the hide class to all the image-col and content-col(except the first one.)
        $("[data-carousel='client']").on('init', function(event, slick){
            let imageComp = document.querySelectorAll(".portfolio-img-block");
            let detailComp = document.querySelectorAll(".company-info-block");
            if (imageComp.length > 0 && detailComp.length > 0) {
                imageComp.forEach((item, index)=> {
                    if(index == 0)return;
                    gsap.set(item, {
                        opacity: 0,
                        y: '-10px',
                    })
                    gsap.set(detailComp[index], {
                        opacity: 0,
                        y: '-10px',
                    })
                })
            }
        });
        this.sliderTop = $("[data-carousel='client']").slick({
            dots: false,
            slidesToScroll: 1,
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            speed: 200,
            fade: true,
            cssEase: "linear",
            appendDots: $paginationItem,
        });

        $paginationItem.childNodes.forEach((item, index) => {
            item.setAttribute("item-ixd", index)
        })
        this.$newPaginationItems = $paginationItem.childNodes;
        // initial it starts from the first dot.
        this.addRemoveActive();
        // adding event listener into the dots, reviews.
        this.$newPaginationItems.forEach((item) => {
            item.addEventListener("click", (e) => {
                const currIdx = e.currentTarget.getAttribute("item-ixd")
                this.sliderTop.slick("slickGoTo", currIdx);
                this.addRemoveActive(currIdx);
            });
        });
        this.sliderTop.on("swipe", (event, slick, direction) => {
            if (direction === "right") {
                this.addRemoveActive(slick.currentSlide);
            } else if (direction === "left") {
                this.addRemoveActive(slick.currentSlide);
            }
        });
        // show component one by one.
        this.sliderTop.on(
            "afterChange",
            (event, slick, currentSlide, nextSlide) => {
                let getActiveSlide = event.target.querySelector(".slick-active");
                let imageComp = (getActiveSlide != undefined) && getActiveSlide.querySelector(".portfolio-img-block");
                let detailComp = (getActiveSlide != undefined) && getActiveSlide.querySelector(".company-info-block");
                if (imageComp != null && detailComp != null) {
                    gsap.to(imageComp, {
                        opacity: 1,
                        y: '10px',
                        duration: 0.4,
                        ease: "linear",
                    })
                    gsap.to(detailComp, {
                        opacity: 1,
                        y: '10px',
                        duration: 0.4,
                        ease: "linear",
                        delay: 0.2
                    })
                }
                this.addRemoveActive(currentSlide);
            }
        );
        this.sliderTop.on(
            "beforeChange",
            (event, slick, currentSlide, nextSlide) => {
                let getActiveSlide = event.target.querySelector(".slick-active");
                let imageComp = (getActiveSlide != undefined) && getActiveSlide.querySelector(".portfolio-img-block");
                let detailComp = (getActiveSlide != undefined) && getActiveSlide.querySelector(".company-info-block");
                if (imageComp != null && detailComp != null) {
                    gsap.set(imageComp, {
                        opacity: 0,
                        y: '-10px',
                    })
                    gsap.set(detailComp, {
                        opacity: 0,
                        y: '-10px',
                    })
                }
            }
        );
    }
    // remove and add active class into the dots.
    addRemoveActive(index = 0) {
        let activeDots = document.querySelectorAll("[item-ixd]");
        let currentDot = document.querySelector(`[item-ixd='${index}']`);
        if (activeDots.length > 0) {
            activeDots.forEach((item) => {
                let activeImage = item.querySelector("[data-logo='active']");
                let normalImage = item.querySelector("[data-logo='normal']");
                item.classList.remove("active")
                if (window.screen.width > 786) {
                    activeImage.style.display = 'none';
                    normalImage.style.display = 'block';
                }
            }
            );
        }
        // console.log(document.querySelector(`[item-ixd='${index}']`))
        if (currentDot != null || currentDot != undefined) {
            let activeImage = currentDot.querySelector("[data-logo='active']");
            let normalImage = currentDot.querySelector("[data-logo='normal']")
            currentDot.classList.add("active");
            if (window.screen.width > 786) {
                activeImage.style.display = 'block';
                normalImage.style.display = 'none';
            }
        }
    }

}
new CLIENTSLIDER();