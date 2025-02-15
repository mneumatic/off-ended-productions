const container = document.querySelector('.hero');
const ripple = document.querySelector('.hero-ripple');

export const rippleEffect = () => {
  if (ripple) {
    const maxDim = Math.max(container.clientWidth, container.clientHeight);
    ripple.style.width = ripple.style.height = `${maxDim}px`;

    const rect = container.getBoundingClientRect();
    const x = rect.left - maxDim / 2;
    const y = rect.top - maxDim / 2;

    // ripple.style.left = `${x}px`;
    ripple.style.bottom = `${y}px`;
  }
}
