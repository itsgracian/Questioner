const SingleQ = (question, comments, total) => (`
   <div class="container">
       <div class="meetQ">
         <div class="title view-title">
           <h5>${question[0].title ? question[0].title : ""}</h5>
           <br>
           <p><img src="/src/assets/images/icons/blackIcons/placeholder.svg" class="location">
           <small>Question was asked by <small class="qNames">
           ${question[0].firstname} ${question[0].lastname}</small></small>
         </div>
         <div class="q">
           <p>${question[0].body ? question[0].body : ""}</p>
           <div class="add-comment">
           <button type="button" name="button" class="clickLike" title="vote" onclick="UpVote(${question[0].question_id})">
             <img src="/src/assets/images/icons/blackIcons/vote.svg" alt="like" class="likeOrTalk"><h5 class="numberVotes">
            </button>
            <button type="button" name="button" class="clickLike" title="downvote" onclick="DownVote(${question[0].question_id})">
            <img src="/src/assets/images/icons/blackIcons/downvote.svg" alt="like" class="likeOrTalk">
            </button>
            <div class="totalVotes">
              ${total.map(vot => `<small class="numberVotes"><small class="numbers upvoting" keys=${question[0].question_id}>
                ${vot.totalup}</small>upvotes</small>
                <small class="numberVotes"><small class="numbers downvoting" keys=${question[0].question_id}>
                ${vot.totaldown}</small>downvotes</small>`)}
            </div>
             </div>
             <!--all comment displaying!-->
             <div class="allcommentDisp">
             ${comments.map(comment => `<div class="coment-section">
               <h5>${comment.firstname ? comment.firstname : ""} ${comment.lastname ? comment.lastname : ""}</h5>
               <span>${comment.comment ? comment.comment : ""}</span>
             </div>`)}
             </div>
             <div class="post-comment" id="some-${question[0].question_id}">
               <form onsubmit="return addComment(${question[0].question_id})">
                 <textarea name="name" class="textArea" keys="${question[0].question_id}"
                 placeholder="write your comment"></textarea>
                 <button type="submit" name="comment" class="postCom">
                   <img src="/src/assets/images/icons/blackIcons/com.svg" alt="like">
                 </button>
                 <small class="textMuted commentError"></small>
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

export default SingleQ;
