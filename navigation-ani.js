function navigationAnimation() {
    let navTl = gsap.timeline({ defaults: { duration: 1, ease: 'back.out(1.7)' } });
    let mainNav = document.querySelector(".navigation-section");
    if(mainNav == undefined || mainNav == null) return;
    let navBtn = mainNav.querySelectorAll(".nav-toggle");
    let navMenu = mainNav.querySelector(".navbar-wrapper");
    let links = navMenu.querySelectorAll("[data-navbar='link']");
    let primaryCta = mainNav.querySelectorAll(".primary-cta.nav-cta")[1];

    navTl.paused(true);
    
    navTl.to(navMenu, { display: "flex", duration: 0})
    navTl.to(navMenu, { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, duration: 0, backgroundColor: "#3D278C", zIndex: 9999 });
    navTl.to(navMenu, { clipPath: "circle(100%)"});
   
    navTl.fromTo(links, { opacity: 0, y: '-30px' }, { opacity: 1, y: 0, stagger: 0.2 },"-=1")
    if (navBtn.length > 0) {
        navBtn.forEach(btn => {
            btn.setAttribute('isActive', false)
            btn.addEventListener('click', () => {
                if (btn.getAttribute('isActive') == "false") {
                    navTl.play();
                    
                    navBtn.forEach(btn => btn.setAttribute('isActive', true));
                }
                else {
                    navTl.reverse(0.2);
                    
                    navBtn.forEach(btn => btn.setAttribute('isActive', false));
                    
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