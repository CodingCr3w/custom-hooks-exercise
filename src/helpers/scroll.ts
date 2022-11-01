export const isWindowFullyScrolled = (offset = 200) =>
  window.innerHeight + window.scrollY + offset >= document.body.offsetHeight
