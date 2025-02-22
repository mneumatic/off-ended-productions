export const loading = item => {
  return new Promise((resolve, reject) => {
    if (item.complete) {
      resolve(item); // Resolve immediately if the image is already loaded
    } else {
      try {
        item.onload = () => resolve(item);
        item.onerror = () => reject(null);
      } catch (error) { console.log(error); }
    }
  })
}
