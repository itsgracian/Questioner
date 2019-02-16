function MeetupView(url){
  document.querySelector(".loadData").style.display="block";
  history.pushState({id:"Meetup"},'Questioner|Meetup',url);
  setTimeout(()=>{
    window.location.reload(true);
  },2000);
  return false;
}

//askquestion
function Ask(id){
  //load
  const load=document.querySelector(".loadData");
  const bodyError=document.querySelector("small[key='body-error']");
  const titleError=document.querySelector("small[key='title-error']");
  //reset
  bodyError.innerHTML="";
  titleError.innerHTML="";
  load.style.display="block";
  const data={
    body:document.querySelector(".textAreaView").value,
    title:document.querySelector(".askInput input[name='title']").value
  };
  const url=`/api/v1/meetups/`+id+'/questions';
  //ask question
  fetch(url,{
    method:"POST",
    mode: "no-cors",
    headers:{
      "Accept":"application/json, text/plain, */*",
      "Content-Type":"application/json",
      "Authorization":getToken()
    },
    body:JSON.stringify(data)
  })
  .then((res)=>res.json())
  .then((result)=>{
    load.style.display="none";
    //check for errors
    if (result.errors) {
      bodyError.textContent=result.errors.body;
      titleError.textContent=result.errors.title;
    }
    if (result.error) {
      bodyError.textContent=result.error;
    }
    if (result.success) {
      document.querySelector(".askMsg").textContent=result.message;
      load.style.display="block";
      setTimeout(()=>{
        window.location.reload(true);
      },2000);
    }
  })
  .catch((error)=>{
    console.log(error);
  })
  return false;
}
//
function MeetupAskedQ(url){
  document.querySelector(".loadData").style.display="block";
  history.pushState({id:"Meetup"},'Questioner|Meetup',url);
  setTimeout(()=>{
    window.location.reload(true);
  },2000);
  return false;
}

//ViewQuestions
function ViewQuestions(url){
  document.querySelector(".loadData").style.display="block";
  setTimeout(()=>{
    history.pushState({id:"Questioner"},'Questioner|Questions',url);
    window.location.reload(true);
  },2000);
  return false;
}
