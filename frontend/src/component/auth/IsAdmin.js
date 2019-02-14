function isAdmin(isAdmin){
  window.addEventListener("hashchange",()=>{
    if (currentUser().isAdmin!==isAdmin) {
      alert("whoops not allowed");
    }
  });
  if (isAdmin!==true) {
    alert("nt man");
  }
}
 export default isAdmin;
