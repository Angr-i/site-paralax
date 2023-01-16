window.addEventListener("scroll", (e)=>{
    document.documentElement.style.setProperty("--scrollTop", `${this.scrollY}px`) // Update method
    ;
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content"
});

//# sourceMappingURL=index.cea00a9b.js.map
