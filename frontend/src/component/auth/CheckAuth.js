const CheckAuth=()=>{
  if (localStorage.token) {
    if (currentUser().isAdmin===true) {
      window.location="/#/dashboard";
    }else {
      window.location="/#/home";
    }
  }
}

export default CheckAuth;
