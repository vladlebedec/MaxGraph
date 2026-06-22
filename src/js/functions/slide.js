export const _slide = {};
_slide.up = function (target, duration = 500, showMoreHeight = 0) {
  clearTimeout(target.slideAnimationTimeoutID);

  target.classList.add("slide");
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = `${target.offsetHeight}px`;
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = showMoreHeight ? `${showMoreHeight}px` : "0px";
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.slideAnimationTimeoutID = setTimeout(() => {
    if (target.offsetParent) {
      target.style.display = "none";
    } else {
      target.style.display = "";
    }

    !showMoreHeight ? target.style.removeProperty("height") : null;
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    !showMoreHeight ? target.style.removeProperty("overflow") : null;
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.classList.remove("slide");
  }, duration);
};
_slide.down = function (target, duration = 500, showMoreHeight = 0) {
  clearTimeout(target.slideAnimationTimeoutID);

  target.classList.add("slide");
  if (!target.offsetParent) target.style.display = "";

  showMoreHeight ? target.style.removeProperty("height") : null;
  const height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = showMoreHeight ? `${showMoreHeight}px` : "0px";
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  target.slideAnimationTimeoutID = setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.classList.remove("slide");
  }, duration);
};
_slide.toggle = (target, duration = 500) =>
  !target.offsetParent
    ? _slide.down(target, duration)
    : _slide.up(target, duration);
