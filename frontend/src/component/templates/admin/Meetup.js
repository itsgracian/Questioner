const AllMeetup = meetup => `
  <div class="admin-greeting">
         <div class="page-name">
           <h2>List of Created Meetup</h2>
         </div>
         <div class="createLink">
           <a href="/#/dashboard-newmeetup">
             <img src="/src/assets/images/icons/blackIcons/forward-arrow.svg">
             <p>create meetup</p>
           </a>
         </div>
       </div>
       <!--!-->
       <div class="lts-tbl">
         <div class="responsive-table">
           <table class="table">
             <thead>
               <tr>
                 <th>
                  <img src="/src/assets/images/icons/blackIcons/cam.svg" alt="meetup imag" class="mt-imgIco">
                 </th>
                 <th>Topic</th>
                 <th>Location</th>
                 <th>Happening on</th>
                 <th>Created On</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
               ${meetup.map(meet => `<tr>
                 <td>
                 <img src="${meet.images ? meet.images[0] : "http://localhost:5000/images/default-45.jpg"}" alt="" class="mt-img">
                 </td>
                 <td>${meet.topic ? meet.topic : ""}</td>
                 <td>${meet.location ? meet.location : ""}</td>
                 <td class="date">${meet.happening ? new Date(meet.happening).toDateString() : ""}</td>
                 <td class="date">${meet.createdOn ? new Date(meet.createdOn).toDateString() : ""}</td>
                 <td class="action">
                     <div class="openAction viewMeetUp" title="open this meetup">
                       <a href="javascript:void" onclick="View('/#/dashboard-meetup/${meet.meetup_id}');">
                         <img src="/src/assets/images/icons/blackIcons/conversation.svg" alt="">
                      </a>
                     </div>
                      <div class="openAction viewQ" title="view asked question on this meetup">
                        <a href="Javascript:void" onclick="MeetupAskedQ('/#/meetup-q/${meet.meetup_id}')">
                          <img src="/src/assets/images/icons/blackIcons/ask.svg" alt="">
                       </a>
                      </div>
                      <div class="openAction deleteMeetup" title="delete meetup">
                        <button class="activity" onclick="trashMeetup(${meet.meetup_id ? meet.meetup_id : ""})">
                          <img src="/src/assets/images/icons/blackIcons/garbage.svg" alt="delete" class="delImg">
                       </button>
                      </div>

                 </td>
               </tr>
               `)}
             </tbody>
           </table>
         </div>
       </div>
  `;

export default AllMeetup;
