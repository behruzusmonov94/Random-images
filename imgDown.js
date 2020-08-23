const img = document.getElementById('img');
const downloadBtn = document.getElementById('downBtn');



downloadBtn.addEventListener('click', ()=>{

    console.log(img.src);

    let str = img.src;
    var res = str.substring(26,40);
   
    saveAs(img.src, res);

})

