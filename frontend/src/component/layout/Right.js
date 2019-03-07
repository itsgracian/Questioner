const Right = (`  <div class="header">
     <div class="header-m">
       <ul>
         <li class="menuBar" onclick="menu()">
          <img src="/src/assets/images/icons/blackIcons/menu.svg" alt="">
         </li>
         ${currentUser().isAdmin === true ? `<li>
           <a href="/#/dashboard-meetup">view meetups</a>
         </li>`
    : `<li>
         <a href="/#/upcoming-meetups">Upcoming meetups</a>
       </li>`}
       </ul>
     </div>
     <div class="profile-hover">
       <div class="pro">
         <ul>
           <li>
             <a href="#">
               <img src="/src/assets/images/icons/blackIcons/bell.svg" alt="notification" class="notification">
             </a>
           </li>
           <li class="av">
             <img src="${currentUser().avatar ? currentUser().avatar : "/src/assets/images/avatar.png"}" alt="">
           </li>
         </ul>
       </div>
     </div>
  </div>`);

export default Right;
