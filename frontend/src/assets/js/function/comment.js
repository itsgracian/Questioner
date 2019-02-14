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
