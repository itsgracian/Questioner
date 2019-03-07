const menu=document.querySelector(".humbuger");
let header=document.querySelector(".header");
let close=document.querySelector(".close");
//
menu.addEventListener("click",()=>{
  header.style="transform:translateX(0)";
});

//
close.addEventListener("click",()=>{
  header.style="transform:translateX(100%)";
})
