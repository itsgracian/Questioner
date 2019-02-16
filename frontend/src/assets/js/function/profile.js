function UpdateUserInfo(e){
  e.preventDefault();
  //resetError
  resetError();
  //errors assignment
  const emailError = document.querySelector("small[key='email-error']");
  const passwordError = document.querySelector("small[key='password-error']");
  const usernameError = document.querySelector("small[key='username-error']");
  const firstnameError = document.querySelector("small[key='firstname-error']");
  const lastnameError = document.querySelector("small[key='lastname-error']");
  const phoneError = document.querySelector("small[key='phone-error']");
  //
  let loadData = document.querySelector(".loadData");
  loadData.style.display = "block";
  const data={
    firstname: document.querySelector("input[name='firstname']").value,
    lastname: document.querySelector("input[name='lastname']").value,
    username: document.querySelector("input[name='username']").value,
    phoneNumber: document.querySelector("input[name='phoneNumber']").value,
    email: document.querySelector("input[name='email']").value
  }
  //send
  fetch(`http://localhost:5000/api/v1/users`,{
    method:"PATCH",
    mode: "cors",
    headers:{
      "Accept":"application/json,*/*",
      "Content-Type":"application/json",
      "Authorization":getToken(),
      "Access-Control-Allow-Origin": "*"
    },
    body:JSON.stringify(data)
  })
  .then((res)=>res.json())
  .then((data)=>{
    //disable loading
    loadData.style.display="none";
    if (data.errors) {
      const err = data.errors;
      emailError.textContent = err.email;
      firstnameError.textContent = err.firstname;
      lastnameError.textContent = err.lastname;
      usernameError.textContent = err.username;
      phoneError.textContent = err.phoneNumber;
    }
    if (data.error) {
      phoneError.textContent = data.error;
    }
    //success
    if (data.success) {
      //disable loading
      loadData.style.display="block";
      const msg=document.querySelector(".savedMsg.profileInfo").textContent=data.message;
      setTimeout(()=>{
        window.location.reload(true);
      },2000);
    }
  })
  .catch((error)=>{
    console.log(error);
  })
}
function resetError() {
  document.querySelector("small[key='email-error']").innerHTML = "";
  document.querySelector("small[key='username-error']").innerHTML = "";
  document.querySelector("small[key='firstname-error']").innerHTML = "";
  document.querySelector("small[key='lastname-error']").innerHTML = "";
  document.querySelector("small[key='phone-error']").innerHTML = "";
}
//change password
function UpdatePassword(e){
  e.preventDefault();
  //errors assignment
  const recentError = document.querySelector("small[key='recent-error']");
  const passwordError = document.querySelector("small[key='password-error']");
  //
  let loadData = document.querySelector(".loadData");
  loadData.style.display = "block";
  const data={
    newpassword: document.querySelector("input[name='newpassword']").value,
    recentpassword: document.querySelector("input[name='recentpassword']").value,
  }
  //
  fetch(`http://localhost:5000/api/v1/users/change-password`,{
    method:"PATCH",
    mode: "cors",
    headers:{
      "Accept":"application/json,*/*",
      "Content-Type":"application/json",
      "Authorization":getToken(),
      "Access-Control-Allow-Origin": "*"
    },
    body:JSON.stringify(data)
  })
  .then((res)=>res.json())
  .then((result)=>{
    loadData.style.display = "none";
    if (result.errors) {
      recentError.textContent = result.errors.recentpassword;
      passwordError.textContent = result.errors.newpassword;
    }
    if (result.error) {
      passwordError.textContent=result.error;
    }
    if (result.success) {
      loadData.style.display = "block";
      document.querySelector(".savedMsg.passwordInfo").textContent=result.message;
      setTimeout(()=>{
        window.location.reload(true);
      },2000);
    }
  })
  .catch((error)=>{
    console.log(error);
  })
}
