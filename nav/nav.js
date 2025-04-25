var tl = gsap.timeline();
tl.from("#one", {
  y: -30,
  duration: 1,
  opacity: 0,
});

tl.from("h2", {
    y: 30,
    duration: 1,
    stagger:0.6,
    opacity: 0,
  });
  tl.from(".head",{
    opacity:0,
    scale:0.2,
    duration:0.8
})