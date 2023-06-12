javascript: (function () {
  let color = () => Math.floor(Math.random() * 255);
  let list = document.body.getElementsByTagName("*");
  for (let item of list) {
    let rgb = "rgb(" + color() + "," + color() + "," + color() + ")";
    let { style } = item;
    style.outline = style.outline ? "" : "1px solid " + rgb;
  }
})();
