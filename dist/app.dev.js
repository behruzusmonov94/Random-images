"use strict";

var modal = document.getElementById('modal');
var showImg = document.getElementById('showImg');

function downBtn(down) {
  console.log(down);
  saveAs(down, 'randomImage');
}

function clickPict(img) {
  $('.ui.modal').modal('show');
  showImg.innerHTML = "\n\n<div class=\"actions\">\n    <div class=\"ui primary basic cancel inverted button\" onclick=\"downBtn(this.parentElement.parentElement.children[1].children[0].src)\">\n        <i class=\"download icon\" ></i>\n       Download\n    </div>\n    <div class=\"ui red basic cancel inverted button\">\n        <i class=\"remove icon\"></i>\n       close\n    </div>\n    \n    \n</div>\n<div class=\"content\">\n    <img src=\"".concat(img.src, "\">\n</div>\n\n\n");
}

var container = document.getElementById('container');

for (var i = 1; i < 30; i++) {
  var randomX = Math.floor(Math.random() * 500) + 400;
  var randomY = Math.floor(Math.random() * 500) + 400;
  container.innerHTML += "\n    <div class=\"box\"> \n        <img src=\"https://picsum.photos/".concat(randomX, "/").concat(randomY, "\" alt=\"\"  onclick=\"clickPict(this)\">\n    </div>\n    "); // console.log(randomX);
}

var loadMore = document.getElementById('loadMore');
loadMore.addEventListener('click', function () {
  for (var _i = 1; _i < 10; _i++) {
    var _randomX = Math.floor(Math.random() * 800) + 500;

    var _randomY = Math.floor(Math.random() * 800) + 500;

    container.innerHTML += "\n        <div class=\"box\"> \n            <img src=\"https://picsum.photos/".concat(_randomX, "/").concat(_randomY, "\" alt=\"\"  onclick=\"clickPict(this)\">\n        </div>\n        ");
  }
}); // window.addEventListener('scroll', ()=>{
//     let mainScroll = 600;
//     if(window.scrollY > mainScroll){
//         // for (let i = 1; i < 2; i++) {
//         //     let randomX = Math.floor(Math.random() * 800) + 500;
//         //     let randomY = Math.floor(Math.random() * 800) + 500;
//         //     container.innerHTML += `
//         //     <div class="box"> 
//         //         <img src="https://picsum.photos/${randomX}/${randomY}" alt=""  onclick="clickPict(this)">
//         //     </div>
//         //     `
//         // }
//         mainScroll = mainScroll+600;
//     }
//     console.log(mainScroll)
// })

var modalOpen = document.getElementById('modalOpen'); // modalOpen.addEventListener('click', ()=>{
//     $('.ui.modal')
//   .modal('show')
// ;
// })