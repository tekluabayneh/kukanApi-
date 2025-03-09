let arrowdown = document.querySelectorAll(".arrow-down");
let backToTop = document.querySelector(".backToTop");

let tl = gsap.timeline();

gsap.to(arrowdown, {
  yoyo: true,
  y: 8,
  duration: 1.2,
  repeat: -1,
});

gsap.to(backToTop, {
  yoyo: true,
  scale: 1.2,
  duration: 2.2,
  repeat: -1,
  ease: "power1.out",
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* resorce */
document.querySelectorAll(".resorce").forEach((item) => {
  item.addEventListener("click", (event) => {
    const clickedItem = event.target.parentNode;
    const parent = clickedItem.closest(".tabParent");

    parent.querySelectorAll(".resorce").forEach((sibling) => {
      if (sibling !== clickedItem) {
        gsap.to(sibling, {
          height: "60",
        });
      }
    });

    gsap.to(clickedItem, {
      height: "200",
    });
  });
});

window.addEventListener("scroll", () => {
  let windowTop = Math.floor(window.scrollY);

  if (windowTop < 60) {
    backToTop.style.display = "none";
  } else {
    backToTop.style.display = "block";
  }
});
