function browseImage(){
  const errorDisp=document.querySelector(".msgError");
  const imageLoad=document.querySelector('.image-upload');
  const imagText=document.querySelector(".imagText p");
  //@when there is an error in uploading create division
  //that will display error on the working page
  const dispError=document.createElement('div');
  const h5Text=document.createElement('h5');
  const hide=document.createElement('div');
  const p=document.createElement('p');
  //x for hide
  p.textContent='X';
  //set attribute
  dispError.setAttribute('class','dispErrors');
  hide.setAttribute('class','errorHide');
  //let me trigger click event
  document.querySelector(".files").click();
  //@change event when click event is triggered
  document.querySelector(".files").addEventListener('change',function(){
    //make empty
    imageLoad.innerHTML='';
    imagText.textContent='';
    errorDisp.innerHTML='';
    //
    let input=this.files[0];
    let mimeTypes=['image/jpg','image/png','image/jpeg'];
    if (mimeTypes.indexOf(input.type)==-1) {
        errorDisp.style="transform:translateY(0%)";
      //
      h5Text.textContent='please file upload must be image (jpg,png or jpeg)';
      //
      dispError.appendChild(h5Text);
      errorDisp.appendChild(dispError);
      hide.appendChild(p);
      //
      errorDisp.appendChild(hide);
    }else if (input.size > 5*1024*1024){
      //
      h5Text.textContent='please your image is too big (5MB only).';
      //
      dispError.appendChild(h5Text);
      errorDisp.appendChild(dispError);
      hide.appendChild(p);
      //
      errorDisp.appendChild(hide);
    }else {
      //final touch
      var reader=new FileReader();
      reader.readAsDataURL(input);
      //
      reader.onload=function(e){
        //before onload clear current image
        imageLoad.innerHTML="";
        //
        imagText.textContent=input.name;
        var img=document.createElement('img');
        img.setAttribute('src',e.target.result);
        imageLoad.appendChild(img);
      }
    }
  })

  /**/
  hide.addEventListener('click',()=>{
    errorDisp.style="transform:translateY(100%)";
  })

}
