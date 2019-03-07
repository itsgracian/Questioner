const body = document.querySelector("body");
function setAttribute(el, attr) {
  for (const key in attr) {
    el.setAttribute(key, attr[key]);
    body.appendChild(el);
  }
}


export default setAttribute;
