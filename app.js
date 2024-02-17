const imgs = document.querySelectorAll(".hero-slider ul img");
const btn_previ = document.querySelector(".control_previ");
const btn_next = document.querySelector(".control_next");

let n =0;

changeSLide = ()=>{
    for (let i = 0; i< imgs.length; i++) {
        imgs[i].style.display  = 'none';
    }
    imgs[n].style.display  = 'block';
} 
changeSLide();

btn_previ.addEventListener('click',(e)=>{
    if( n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
changeSLide();
});

btn_next.addEventListener('click',(e)=>{
    if( n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
changeSLide();
});

const scroll_cont = document.querySelectorAll(".products");
for(const i of scroll_cont){
    i.addEventListener("wheel",(e)=>{
        e.preventDefault();
        e.scrollLeft += e.deltaV

    })
}