const currentUser=()=>{
  if (localStorage.token) {
    const decode=jwt_decode(localStorage.token);
    return {
      username:decode.username,
      email:decode.email,
      isAdmin:decode.isadmin,
      firstname:decode.firstname,
      lastname:decode.lastname,
      phoneNumber:decode.phoneNumber
    };
  }else{
    return false;
  }
}

const getToken=()=>{
  if (localStorage.token) {
    return localStorage.token;
  }else{
    return false;
  }
}
