function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const headElement = document.querySelectorAll(".app__section-head");
const animatedElements = document.querySelectorAll(".container");

function animateElements() {
  for (let i = 0; i < animatedElements.length; i++) {
    if (isInViewport(animatedElements[i])) {
      animatedElements[i].classList.add("visible");
    }
  }
  for (let i = 0; i < headElement.length; i++) {
    if (isInViewport(headElement[i])) {
      headElement[i].classList.add("visible");
    }
  }
}

window.addEventListener("scroll", animateElements);
