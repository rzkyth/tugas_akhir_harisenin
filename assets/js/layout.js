const navbar = document.querySelector("nav");
const navToggler = document.querySelector("[data-toggler-nav]");
console.log(navToggler);

function handleToggler() {
  if (navToggler.innerText === "menu") {
    navToggler.innerText = "close";
    navbar.classList.remove("hidden");
  } else {
    navToggler.innerText = "menu";
    navbar.classList.add("hidden");
  }
}
