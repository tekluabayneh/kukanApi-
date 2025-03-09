const register = document.querySelector(".register");
const login = document.querySelector(".login");
const registerBtn = document.querySelector(".registerBtn");
const loginBtn = document.querySelector(".loginBtn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gsap.to(login, {
    display: "none",
    ease: "powr1.out",
    duration: 1,
    opacity: 0,
  });

  gsap.to(register, {
    display: "block",
    opacity: 1,
    x: 0,
    zIndex: 12,
    ease: "elastic",
    duration: 1,
  });
});

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  gsap.to(login, {
    display: "block",
    ease: "powr1.out",
    duration: 1,
    opacity: 1,
  });

  gsap.to(register, {
    display: "none",
    ease: "powr1.out",
    duration: 1,
    opacity: 0,
  });
});
