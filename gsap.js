gsap.registerPlugin(MotionPathPlugin);


const tl = gsap.timeline()
    .to("#bat1", {
        motionPath: "M-200,100 l150,100 L150,200 A50,50 0 1,0 100,150 Q20,150 200,100 C-200,-100 205,250 210,200 A50,50 0 1,0 100,150 a100,-100 0 1,0 00,150 l200,-200  200,200Z",
        duration: 5,
        repeat: 1
    })
    .to("#hallo", { fill: "orange", strokeWidth: 3, y: -100 }, 3)
    .to("#w", { fill: "orange", strokeWidth: 4, y: -100 }, 3.5)
    .to("#een", { fill: "orange", strokeWidth: 5, y: -100 }, 4)
    .to("#pumpkin", { opacity: 0, ease: "elastic", duration: 5 }, 2)
    .to("#spooky-boom1", { scale: 1.3, fill: "red", repeat: -1 }, 1)
    .to("#spooky-boom2", { scale: 1.5, fill: "red", repeat: -1 }, 2.5)
    .to("#spooky-boom3", { scale: 1.2, fill: "red", repeat: -1 }, 3)
    .to(".bat", { x: 100, y: -100, duration: 2 }, 9)
    .fromTo(".bat", { x: 100, y: -100 }, { x: 90, y: -50, repeat: -1, ease: "elastic", duration: 4 }, 10.7)