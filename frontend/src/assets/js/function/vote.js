function UpVote(qId){
  let upvoting=document.querySelector("small[keys='"+qId+"'].upvoting");
  let downvoting=document.querySelector("small[keys='"+qId+"'].downvoting");
  fetch(`http://localhost:5000/api/v1/questions/${qId}/upvote`,{
    method:"POST",
    headers:{
      "Accept":"application/json,*/*",
      "Content-type":"application/json",
      "Authorization":getToken()
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
  fetch(`http://localhost:5000/api/v1/questions/${qId}/downvote`,{
    method:"POST",
    headers:{
      "Accept":"application/json,*/*",
      "Content-type":"application/json",
      "Authorization":getToken()
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
