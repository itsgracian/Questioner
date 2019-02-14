const AskedQ=(meetup,questions,votes)=>{
 let sum=0;
 return (`
   ${questions.map(qt=>
     `<div class="container">
       <div class="meetQ">
       <div class="title view-title" >
         <h5>${qt.title? qt.title : ""}</h5>
         <br>
         ${meetup.map(meet=>
          `<p><img src="/src/assets/images/icons/blackIcons/placeholder.svg" class="location">
         ${meet.topic? meet.topic : ""}
         <span class="date">${meet.happening? new Date(meet.happening).toDateString() : ""}</span></p>`)}
       </div>
       <div class="q">
         <p>${qt.body}</p>
         <div class="add-comment">
         <button type="button" name="button" class="clickLike" title="vote" onclick="UpVote(${qt.question_id})">
           <img src="/src/assets/images/icons/blackIcons/vote.svg" alt="like" class="likeOrTalk"><h5 class="numberVotes">
          </button>
          <button type="button" name="button" class="clickLike" title="downvote" onclick="DownVote(${qt.question_id})">
          <img src="/src/assets/images/icons/blackIcons/downvote.svg" alt="like" class="likeOrTalk">
          </button>
          <a href="Javascript:void" onclick="ViewQuestions('/#/question/${qt.question_id}')"
          title="view all comment related to this question" class="comBtn">view comments
          </a>
          <div class="totalVotes">
            ${votes.map(vot=>
              (vot.question_id===qt.question_id) ?
              `<small class="numberVotes"><small class="numbers upvoting" keys=${qt.question_id}>
              ${vot.totalup}</small>upvotes</small>
              <small class="numberVotes"><small class="numbers downvoting" keys=${qt.question_id}>
              ${vot.totaldown}</small>downvotes</small>`:""
            )}
          </div>
           </div>
           <div class="post-comment" id="some-${qt.question_id}">
             <form  onsubmit="return postComment(${qt.question_id})">
               <textarea name="comment" keys="${qt.question_id}"
               class="textArea" placeholder="write your comment"></textarea>
               <button type="submit" name="comment" class="postCom">
                 <img src="/src/assets/images/icons/blackIcons/com.svg" alt="like">
               </button>
               <small class="textMuted commentError"></small>
             </form>
           </div>
           <div>
           <small>Question was asked by <small class="qNames">${qt.firstname} ${qt.lastname}</small></small>
           </div>
       </div>
     </div>
       <div class="meet-link">
         <div class="linkFixed">
           <div class="morecomment" id="viewMoreComment">
             <a href="Javascript:void" onclick="ViewQuestions('/#/question/${qt.question_id}')">
               <img src="/src/assets/images/icons/blackIcons/coment.svg" title="view more comment">
             </a>
           </div>
         </div>
       </div>
     </div>`)}`);
}

export default AskedQ;
