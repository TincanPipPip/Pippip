// Global func to toggle states
window.toggleState = function(el, on, off) {
  el.setAttribute(
    "data-state",
    el.getAttribute("data-state") === on ? off : on
  );
};
