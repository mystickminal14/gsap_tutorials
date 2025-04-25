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
gsap.from('.page1 .box',{
  scale:0,
  duration:1,

  rotate:360,
  repeat:2

})
gsap.from('.page2 .box2',{
  scale:0,
  duration:1,
  rotate:360,
  // scrollTrigger:".page2 .box2"
  scrollTrigger:{
    trigger:".page2 .box2",
    scroller:"body",
    markers: true,
    start:"top 60%",
    end:"top 30%",
    scrub: 2
  }

})
gsap.from('.page3 .box3',{
  scale:0,
  rotate:360,

})