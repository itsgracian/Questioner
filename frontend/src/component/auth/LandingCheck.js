const Verify = () => {
  if (localStorage.token) {
    //check for user
    if (currentUser().isAdmin === true) {
      const returns = (`<li title='Home'>
          <a href="#">
           <img src='/src/assets/images/icons/blackIcons/homes.svg' class='svgIco'>
          </a>
        </li>
        <li title='My Dashboard'>
          <a href='#/My Dashboard'>
           <img src='/src/assets/images/icons/blackIcons/return.svg' class='svgIco'>
          </a>
        </li>
        <li title='My Profile'>
          <a href='#/myaccount'>
           <img src='/src/assets/images/icons/blackIcons/login.svg' class='svgIco'>
          </a>
        </li>`);
      return returns;
    }
    const returns = (`<li title='Home'>
          <a href="#">
           <img src='/src/assets/images/icons/blackIcons/homes.svg' class='svgIco'>
          </a>
        </li>
        <li title='My Dashboard'>
          <a href='#/home'>
           <img src='/src/assets/images/icons/blackIcons/return.svg' class='svgIco'>
          </a>
        </li><li title='My Profile'>
          <a href='#/myaccount'>
           <img src='/src/assets/images/icons/blackIcons/login.svg' class='svgIco'>
          </a>
        </li>`);
    return returns;
  }
  const returns = (`<li title='Home'>
        <a href="#">
         <img src='/src/assets/images/icons/blackIcons/homes.svg' class='svgIco'>
        </a>
      </li>
      <li title='signup now'>
        <a href='#/join'>
         <img src='/src/assets/images/icons/blackIcons/about.svg' class='svgIco'>
        </a>
      </li>
      <li title='sign in'>
        <a href='#/signin'>
         <img src='/src/assets/images/icons/blackIcons/foot.svg' class='svgIco'>
        </a>
      </li>`);
  return returns;
};
export default Verify;
