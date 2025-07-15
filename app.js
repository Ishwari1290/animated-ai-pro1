// Navbar slide-in
gsap.to(".navbar", {
  y: 0,
  duration: 1,
  ease: "power2.out",
  delay: 0.2
});

// Hero text fade-up
gsap.from(".hero-text", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 0.5
});

gsap.from(".hero-subtext", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 0.7
});

// CTA button pulse
gsap.to(".cta-button", {
  scale: 1.05,
  repeat: -1,
  yoyo: true,
  duration: 1,
  ease: "power1.inOut",
  delay: 1.2
});

// Scroll-trigger fade-ins
gsap.utils.toArray(".fade-in").forEach(el => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
});
