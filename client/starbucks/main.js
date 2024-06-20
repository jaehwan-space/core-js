const aList = document.querySelectorAll('nav a');

/* global gsap */

aList.forEach((a) => {
  const target = a.lastElementChild;

  const tl = gsap.timeline({ paused: true }).to(target, { height: 100 });

  a.addEventListener('mouseenter', () => {
    tl.play();
  });
  a.addEventListener('mouseleave', () => {
    tl.reverse();
  });
});
