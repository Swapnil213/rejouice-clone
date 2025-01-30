function cursorAnimation() {
    var page1 = document.querySelector("#page1");
    var cursor = document.querySelector("#cursor");

    page1.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    page1.addEventListener("mouseenter", function (dets) {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })

    page1.addEventListener("mouseleave", function (dets) {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}
cursorAnimation();

function page2Animation() {
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 47%",
            end: "top 46%",
            markers: true,
            scrub: 2
        }
    });
}
page2Animation();