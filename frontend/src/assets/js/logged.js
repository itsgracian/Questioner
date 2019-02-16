 function loggedUser(){
  if (localStorage.token) {
    try {
     const response= fetch(`http://localhost:5000/api/v1/users/current/user`,{
         method:"GET",
         headers:{
           "Accept":"application/json,*/*",
           "Content-Type":"application/json",
           "Authorization":getToken()
         }
       });
    const data= response.json();
    console.log(data);
    } catch (e) {
      console.log(error);
    }
  }
}
