const container = document.querySelector('.hero');
const ripple = document.querySelector('.hero-ripple');

export const rippleEffect = (value) => {
  if (ripple) {
    const maxDim = Math.max(container.clientWidth, container.clientHeight);
    ripple.style.width = ripple.style.height = `${maxDim}px`;

    const rect = container.getBoundingClientRect();
    const x = rect.left - maxDim / 2;
    const y = rect.top - maxDim / 2;

    if (value === "bottom") { ripple.style.bottom = `${y}px`; }
    if (value === "topLeft") {
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
    } else {
      ripple.style.bottom = `${y}px`;
    }
  }
}
