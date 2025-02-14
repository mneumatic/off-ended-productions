export const loading = (img) => {
  return new Promise((resolve, reject) => {
    if (img.complete) {
      resolve(img); // Resolve immediately if the image is already loaded
    } else {
      try {
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
      } catch (error) {

      }
    }
  })
}
