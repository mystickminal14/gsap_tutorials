gsap.to(".box",
    {
        x:1000,
        rotate:360,
        duration:2,
        delay:1,
    
        yoyo:true,
        backgroundColor: "blue",
    }
);

gsap.to(".box2",
    {
        x:1000,
        duration:2,
        backgroundColor: "red",
        yoyo:true,
        delay:2.5
    }
);
gsap.to(".box3",
    {
        x:1000,
        duration:2,
        backgroundColor: "pink",
        yoyo:true,
        delay:4
    }
);
gsap.to("h1",
    {
       y:20,
       opacity:0,
       duration:1,
       delay:1,
       stagger:0.5,
       repeat:1,
yoyo:true
    }
)

//  timeline
var tl=gsap.timeline()
tl.to(".box",{
    x:1000,
    duration:2,
    // delay:1,
  backgroundColor: "pink"
})
tl.to(".box2",{
    x:1000,
    duration:2,
    backgroundColor: "red"
})
tl.to(".box3",{
    x:1000,s
    duration:2,
    backgroundColor: "green"
})
tl.from(".head",{
    opacity:0;
    scale:0.2,
    duration:2
})