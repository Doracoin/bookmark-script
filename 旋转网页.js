javascript: (function () {
  var rotateNum = prompt("",180);
  document.body.style.cssText +=
    "transition: all 0.5s; transform: rotate(" + rotateNum + "deg);";
})();