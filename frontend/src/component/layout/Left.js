const Left = (`<section class="left-side">
   <div class="top-h">
     <div class="top-name"><span>Welcome ${currentUser() ? currentUser().username : ""} </span></div>
     <div class="top-avatar">
       <img src="${currentUser().avatar ? currentUser().avatar : "/src/assets/images/avatar.png"}" alt="avatar">
     </div>
   </div>
   <div class="close" onclick="closeMenu()"><p>X</p></div>
   <div class="top-menu">
      <nav>
        <ul>
         ${currentUser().isAdmin === true ? `
           <li>
              <a href="/#/dashboard">
                  <div class="menuIcon">
                    <img src="/src/assets/images/icons/blackIcons/browsing.svg" alt="icon">
                  </div>
                 <span>My Dashboard</span>
              </a>
           </li>
              <li>
                <a href="/#/dashboard-meetup">
                    <div class="menuIcon">
                      <img src="/src/assets/images/icons/blackIcons/question.svg" alt="icon">
                    </div>
                   <span>Meet Ups</span>
                </a>
             </li>
             <li>
                <a href="/#/myaccount">
                  <div class="menuIcon">
                    <img src="/src/assets/images/icons/blackIcons/user.svg" alt="icon">
                  </div>
                 <span>My Profile</span>
                </a>
             </li>
             <li>
                <a href="Javascript:void" onclick="logout(event)" style="cursor:pointer;">
                  <div class="menuIcon">
                    <img src="/src/assets/images/icons/blackIcons/logout.svg" alt="icon">
                  </div>
                 <span>Logout</span>
                </a>
             </li>`
    : `
             <li>
                <a href="/#/home">
                    <div class="menuIcon">
                      <img src="/src/assets/images/icons/blackIcons/browsing.svg" alt="icon">
                    </div>
                   <span>Home</span>
                </a>
             </li>
             <li>
              <a href="/#/myquestion">
              <div class="menuIcon">
                <img src="/src/assets/images/icons/blackIcons/question.svg" alt="icon">
              </div>
              <span>My Questions</span>
                 </a>
                 </li>
                 <li>
                    <a href="/#/myaccount">
                      <div class="menuIcon">
                        <img src="/src/assets/images/icons/blackIcons/user.svg" alt="icon">
                      </div>
                     <span>My Profile</span>
                    </a>
                 </li>
                 <li>
                    <a href="Javscript:void" onclick="logout(event)" style="cursor:pointer;">
                      <div class="menuIcon">
                        <img src="/src/assets/images/icons/blackIcons/logout.svg" alt="icon">
                      </div>
                     <span>Logout</span>
                    </a>
                 </li>
                 `}

        </ul>
      </nav>
   </div>
 </section>`);

export default Left;
