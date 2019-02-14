const CheckToken=()=>{
  //check if token is expired
  if (localStorage.token) {
    const decoded=jwt_decode(localStorage.token);
    //check for exp time
    const currentTime=Date.now()/1000;
    if (decoded.exp<currentTime) {
      //remove token because it's expired
      localStorage.removeItem("token");
      window.location="/#/signin";
    }
  }
}
export default CheckToken;
