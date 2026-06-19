let resizeTimeout;
addEventListener("resize", () => {
   clearTimeout(resizeTimeout);

   document.body.classList.add("resize");
   resizeTimeout = setTimeout(() => document.body.classList.remove("resize"), 300);
})