function postComment(Qid){
  //
  const commentError=document.querySelector(".commentError");
  const data={
    question:Qid,
    comment:document.querySelector("textarea[keys='"+Qid+"']").value
  };
  // //fetch API
  fetch(`http://localhost:5000/api/v1/comments/${Qid}`,{
    method:"POST",
    mode: "no-cors",
    headers:{
      "Accept":"application/json,*/*",
      "Content-type":"application/json",
      "Authorization":getToken()
    },
    body:JSON.stringify(data)
  })
  .then((res)=>res.json())
  .then((result)=>{
    //check for errors
    if (result.errors) {
      //append error
      const er=document.querySelector(`#some-${Qid}`);
      er.style="border-top:1px solid #e25d91";
    }
    //
    if (result.success) {
      //set textArea to empty
      document.querySelector("textarea[keys='"+Qid+"']").value="";
      //remove error
      const er=document.querySelector(`#some-${Qid}`);
      er.style="border-top:1px solid #fcfcfc";
    }
  })
  .catch((error)=>{
    console.log(error);
  })
  return false;
}

//addComment
function addComment(Qid){
  const commentError=document.querySelector(".commentError");
  const data={
    question:Qid,
    comment:document.querySelector("textarea[keys='"+Qid+"']").value
  };
  // //fetch API
  fetch(`http://localhost:5000/api/v1/comments/${Qid}`,{
    method:"POST",
    mode: "no-cors",
    headers:{
      "Accept":"application/json,*/*",
      "Content-type":"application/json",
      "Authorization":getToken()
    },
    body:JSON.stringify(data)
  })
  .then((res)=>res.json())
  .then((result)=>{
    //check for errors
    if (result.errors) {
      //append error
      const er=document.querySelector(`#some-${Qid}`);
      er.style="border-top:1px solid #e25d91";
    }
    //
    if (result.success) {
      //set textArea to empty
      document.querySelector("textarea[keys='"+Qid+"']").value="";
      //remove error
      const er=document.querySelector(`#some-${Qid}`);
      er.style="border-top:1px solid #fcfcfc";
      //append new comment
      const user=result.user;
      const newComment=result.data;
      const commentDiv=document.querySelector(".allcommentDisp");
      const newDiv=document.createElement("div");
      const h5=document.createElement("h5");
      const span=document.createElement("span");
      //setAttribute
      newDiv.setAttribute("class","coment-section");
      //add data
      h5.textContent=user[0].firstname+" "+user[0].lastname;
      span.textContent=newComment[0].comment;
      //append
      newDiv.appendChild(h5);
      newDiv.appendChild(span);
      //append to parent div
      commentDiv.appendChild(newDiv);
    }
  })
  .catch((error)=>{
    console.log(error);
  })
  return false;
}