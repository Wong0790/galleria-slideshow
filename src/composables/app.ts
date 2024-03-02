export function loadImg(url: string = "") {
  return new URL(url, import.meta.url).href;
}
