const SingleQ=()=>{
 return (`
   <div class="container">
       <div class="meetQ">
         <div class="title view-title">
           <h5>Andela learning community</h5>
           <br>
           <p><img src="/src/assets/images/icons/blackIcons/placeholder.svg" class="location">Kigali
            <span class="date">Thu Feb 14 2019</span></p>
         </div>
         <div class="q">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             <!--!-->
             <div class="add-comment">
               <button type="button" name="button" class="clickLike" title="vote">
                 <img src="/src/assets/images/icons/blackIcons/vote.svg" alt="like" class="likeOrTalk">
                 <h5 class="numberVotes">245 votes</h5>
               </button>
               <button type="button" name="button" class="clickLike" title="downvote">
                 <img src="/src/assets/images/icons/blackIcons/downvote.svg" alt="like" class="likeOrTalk">
                 <h5 class="numberVotes">245 downvotes</h5>
               </button>
             </div>
             <!--all comment displaying!-->
             <div class="allcommentDisp">
               <div class="coment-section">
                 <h5>Gratian tuyishimire</h5>
                 <span> kid dsjfskdjfbdsjfsdb fdsjfdsfjdgshfjsd fdsjfvdsfds safgsafkhdsgfsdf
                   sjdfgdsufds sdfgdsfgdsf dsfdvsufds
                   fdskfdvskfdvs fdskfsdvkufsd fdskfvdskfds
                 </span>
               </div>
               <div class="coment-section">
                 <h5>Kimpama samuel</h5>
                 <span> kid dsjfskdjfbdsjfsdb fdsjfdsfjdgshfjsd fdsjfvdsfds safgsafkhdsgfsdf
                   sjdfgdsufds sdfgdsfgdsf dsfdvsufds
                   fdskfdvskfdvs fdskfsdvkufsd fdskfvdskfds
                 </span>
               </div>
               <div class="coment-section">
                 <h5>Christian emma</h5>
                 <span> kid dsjfskdjfbdsjfsdb fdsjfdsfjdgshfjsd fdsjfvdsfds safgsafkhdsgfsdf
                   sjdfgdsufds sdfgdsfgdsf dsfdvsufds
                   fdskfdvskfdvs fdskfsdvkufsd fdskfvdskfds
                 </span>
               </div>
               <div class="coment-section">
                 <h5>Kimpama samuel</h5>
                 <span> kid dsjfskdjfbdsjfsdb fdsjfdsfjdgshfjsd fdsjfvdsfds safgsafkhdsgfsdf
                   sjdfgdsufds sdfgdsfgdsf dsfdvsufds
                   fdskfdvskfdvs fdskfsdvkufsd fdskfvdskfds
                 </span>
               </div>
               <div class="coment-section">
                 <h5>michael rider</h5>
                 <span> kid dsjfskdjfbdsjfsdb fdsjfdsfjdgshfjsd fdsjfvdsfds safgsafkhdsgfsdf
                   sjdfgdsufds sdfgdsfgdsf dsfdvsufds
                   fdskfdvskfdvs fdskfsdvkufsd fdskfvdskfds
                 </span>
               </div>


             </div>
             <div class="post-comment">
               <form class="" action="#" method="post">
                 <textarea name="name" class="textArea" placeholder="write your comment"></textarea>
                 <button type="submit" name="comment" class="postCom">
                   <img src="/src/assets/images/icons/blackIcons/com.svg" alt="like">
                 </button>
               </form>
             </div>

         </div>
       </div>
       <div class="onView">
         <div class="linkFixed">
           <div class="ft-link goback" id="createq">
             <a href="/#/home" title="go to home">
               <img src="/src/assets/images/icons/blackIcons/return.svg">
             </a>
           </div>
         </div>
       </div>
     </div>`);
}

export default SingleQ;
