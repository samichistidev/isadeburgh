gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

ScrollTrigger.scrollerProxy(document.documentElement, {
  scrollTop(value) {
    if (arguments.length) return lenis.scrollTo(value);
    return lenis.scroll.instance
      ? lenis.scroll.instance.scroll.y
      : window.scrollY;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.documentElement.style.transform ? "transform" : "fixed",
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.to(".navigation .logo", {
  width: "265px",
  duration: 0.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".work",
    start: "top 100%",
    scrub: true,
  },
});

gsap.to(".snake-text svg", {
  left: 0,
  top: 0,
  rotate: 0,
  duration: 0.5,
  ease: "power4.out",
  delay: 1.18,
  stagger: 0.05,
});

setTimeout(() => {
  let snakeTextSvgs = document.querySelectorAll(".snake-text svg");
  snakeTextSvgs.forEach((svg) => {
    svg.style.animationPlayState = "running";
  });

  gsap.to(".snake-text", {
    left: -window.innerWidth,
    top: window.innerHeight,
    duration: 4,
    delay: 0.6,
    ease: "linear",
  });
}, 1600);

gsap.from(".hero .p span", {
  bottom: "-300px",
  delay: 0.1,
  duration: 1.5,
  ease: "power4.out",
  stagger: 0.1,
});

gsap.from(".hero .right-content img", {
  delay: 0.3,
  scale: 1.5,
  rotate: "10deg",
  duration: 1.8,
  ease: "power4.out",
  stagger: 0.1,
});

gsap.from(".navigation .logo", {
  bottom: "-300px",
  delay: 0.1,
  duration: 1.5,
  ease: "power4.out",
});

gsap.from(".button.of-h span", {
  bottom: "-100px",
  delay: 0.1,
  duration: 1.5,
  ease: "power4.out",
});

gsap.registerPlugin(ScrollTrigger);
