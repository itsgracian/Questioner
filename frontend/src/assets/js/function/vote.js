function UpVote(qId){
  let upvoting=document.querySelector("small[keys='"+qId+"'].upvoting");
  let downvoting=document.querySelector("small[keys='"+qId+"'].downvoting");
  fetch(`/api/v1/questions/${qId}/upvote`,{
    method:"POST",
    mode: "cors",
    headers:{
      "Accept":"application/json,*/*",
      "Content-Type":"application/json",
      "Authorization":getToken(),
      "Access-Control-Allow-Origin": "*"
    },
    body:JSON.stringify({})
  })
  .then((res)=>res.json())
  .then((result)=>{
    if (result.success) {
      upvoting.innerHTML="";
      downvoting.innerHTML="";
      let updated=result.total;
      upvoting.textContent=updated[0].totalup;
      downvoting.textContent=updated[0].totaldown;
    }
  })
  .catch((error)=>{
    console.log(error);
  })

  return false;
}

function DownVote(qId){
  let upvoting=document.querySelector("small[keys='"+qId+"'].upvoting");
  let downvoting=document.querySelector("small[keys='"+qId+"'].downvoting");
  fetch(`/api/v1/questions/${qId}/downvote`,{
    method:"POST",
    mode: "cors",
    headers:{
      "Accept":"application/json,*/*",
      "Content-Type":"application/json",
      "Authorization":getToken(),
      "Access-Control-Allow-Origin": "*"
    },
    body:JSON.stringify({})
  })
  .then((res)=>res.json())
  .then((result)=>{
    if (result.success) {
      upvoting.innerHTML="";
      downvoting.innerHTML="";
      let updated=result.total;
      upvoting.textContent=updated[0].totalup;
      downvoting.textContent=updated[0].totaldown;
    }
  })
  .catch((error)=>{
    console.log(error);
  })
  return false;
}
