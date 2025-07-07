function LenisInit() {
  const lenis = new Lenis({
    duration: 3,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}
LenisInit();
