const smallnav = $(".smallnav");

$(".opennav").on("click", () => {
  gsap.to(smallnav, {
    x: 0,
    duration: 1,
    ease: "expoScale(0.0.5, none)",
  });

  gsap.from("ul li a", {
    stagger: {
      amount: 1,
      from: "start",
      ease: "power3.inOut",
    },
    opacity: 0,
    duration: 2,
    xPercent: 50,
    yPercent: 50,
    ease: "expoScale(0.0.5, none)",
  });

  //   smallnav.style.transform = "translateX(0px)";
});

$(".closenav").on("click", () => {
  gsap.to(smallnav, {
    x: -5000,
    duration: 1.5,
    ease: "power1.out",
  });
  //   smallnav.style.transform = "translateX(5000px)";
});
