/* eslint-disable no-undef */

// AOS
AOS.init();

// Gsap
gsap.registerPlugin(TextPlugin);
gsap.from(".jumbotron img", { duration: 2, rotationY: 360, opacity: 0 });
gsap.from(".display-4", { duration: 1, x: -50, opacity: 0, delay: 0.5, ease: "back" });
gsap.to(".lead", { duration: 2, delay: 1.5, text: "'Programmer'" });
