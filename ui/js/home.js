var date=document.querySelectorAll(".date");
//
date.forEach((button,index)=>{
  button.textContent=new Date().toDateString();
});

//@opening menu bar on mobile version
const menu=document.querySelector(".menuBar");
const close=document.querySelector(".close");
menu.addEventListener('click',()=>{
  close.style.display="block";
  document.querySelector('.left-side').style="transform:translateX(0%)";
})

close.addEventListener("click",()=>{
  close.style.display="none";
  document.querySelector('.left-side').style="transform:translateX(-100%)";
})
