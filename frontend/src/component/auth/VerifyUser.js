const Verify = () => {
  if (localStorage.token) {
    //check for user
    if (currentUser().isAdmin === true) {
      const returns = (`<a href='#/dashboard'>
       <button type='button' name='button' class='signInBtn'>Dashboard</button>
      </a>`);
      return returns;
    }
    const returns = (`<a href='#/home'>
      <button type='button' name='button' class='signInBtn'>Dashboard</button>
      </a>`);
    return returns;
  }
  const returns = (`<a href='#/signin'>
     <button type='button' name='button' class='signInBtn'>Sign in</button>
    </a>
    <a href='#/join'>
     <button type='button' name='button' class='signUpBtn'>Join Questioner</button>
    </a>`);
  return returns;
};
export default Verify;
