"use strict";

var img = document.getElementById('img');
var downloadBtn = document.getElementById('downBtn');
downloadBtn.addEventListener('click', function () {
  console.log(img.src);
  var str = img.src;
  var res = str.substring(26, 40);
  saveAs(img.src, res);
});