const modal = document.getElementById('modal');


const showImg = document.getElementById('showImg');


function downBtn(down){

    console.log(down);

   
    saveAs(down, 'randomImage');


}

function clickPict(img) {

    $('.ui.modal')
    .modal('show')
  ;
showImg.innerHTML = `

<div class="actions">
    <div class="ui primary basic cancel inverted button" onclick="downBtn(this.parentElement.parentElement.children[1].children[0].src)">
        <i class="download icon" ></i>
       Download
    </div>
    <div class="ui red basic cancel inverted button">
        <i class="remove icon"></i>
       close
    </div>
    
    
</div>
<div class="content">
    <img src="${img.src}">
</div>


`
    



}





const container = document.getElementById('container');

for (let i = 1; i < 30; i++) {
    let randomX = Math.floor(Math.random() * 500) + 400;
    let randomY = Math.floor(Math.random() * 500) + 400;

    container.innerHTML += `
    <div class="box"> 
        <img src="https://picsum.photos/${randomX}/${randomY}" alt=""  onclick="clickPict(this)">
    </div>
    `

    // console.log(randomX);


}

const loadMore = document.getElementById('loadMore');

loadMore.addEventListener('click', ()=>{
    for (let i = 1; i < 10; i++) {
        let randomX = Math.floor(Math.random() * 800) + 500;
        let randomY = Math.floor(Math.random() * 800) + 500;
    
        container.innerHTML += `
        <div class="box"> 
            <img src="https://picsum.photos/${randomX}/${randomY}" alt=""  onclick="clickPict(this)">
        </div>
        `

    }
})
// window.addEventListener('scroll', ()=>{
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



const modalOpen = document.getElementById('modalOpen')

// modalOpen.addEventListener('click', ()=>{

//     $('.ui.modal')
//   .modal('show')
// ;

// })