javascript: (function () {
  var url = location.href;
  var otherWindow = window.open("about:blank", "_blank");
  otherWindow.opener = null;
  otherWindow.location =
    "https://doracoin.cc/usr/themes/aria/lib/getQRCode.php?url=" +
    encodeURIComponent(url);
})();
