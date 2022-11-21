const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener(
  "click",
  (e) => {
    console.log("grandparent 1");
  },
  { capture: true }
);

setTimeout(() => {
  parent.removeEventListener("click", () => {
    console.log("pare");
  });
}, 3000);

parent.addEventListener(
  "click",
  (e) => {
    console.log("parent");
  },
  { once: true }
);

child.addEventListener("click", (e) => {
  console.log("child");
});
 
// BUBBLING IS THE DEFAULT IT works inside out or ascending order
//CAPTURE IS THE OPPOSITE also you have to add capture in your code for it to work
// CAPTURE WORKS AHEAD OF BUBBLE
//.stopPropagation() stop events
// use ONCE to add an event once

const divs = document.querySelectorAll("div");

divs.forEach((diiv) => {
  diiv.addEventListener("click", () => {
    console.log("hi");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.matches("div")) {
    console.log("hi");
  }
});

const newDivs = document.createElement("div");

newDivs.style.backgroundColor = "purple";
newDivs.style.width = "400px";
newDivs.style.height = "400px";
document.body.append(newDivs);
