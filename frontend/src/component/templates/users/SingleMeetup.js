const SingleMeetup = (meetup, totalQuestions) => (`
    ${meetup.map(meet => `<div class="container">
      <div class="more-about">
        <div class="title view-title" >
          <h5>${meet.topic ? meet.topic : ""}</h5>
          <br>
          <p><img src="/src/assets/images/icons/blackIcons/placeholder.svg" class="location">
          ${meet.location ? meet.location : ""}
           <span class="date">${meet.happening ? new Date(meet.happening).toDateString() : ""}</span></p>
        </div>
        <div class="bImg">
         <img src="${meet.images ? meet.images[0] : "/images/default-45.jpg"}" alt="">
        </div>
        <div class="asked-question">
          <div class="ft-link totalQuestions" title="View asked questions on this meet-up">
            <a href="Javascript:void" onclick="MeetupAskedQ('/#/meetup-q/${meet.meetup_id}')">
              <img src="/src/assets/images/icons/blackIcons/ask.svg" alt="ask question">
            </a>
          </div>
          <h5>${totalQuestions ? `${totalQuestions} questions was created on this meetup`
    : "There is no question on this meetup"}</h5>
        </div>
        <!--askquestion!-->
        <div class="askMeetup">
          <div class="text-editor">
            <div class="u-intro" onclick="openQuestion()">
              <div class="u-avatar">
                  <img src="${currentUser.avatar ? currentUser.avatar:"/src/assets/images/avatar.png"}">
                 </div>
                 <div class="u-placeholder">
                     <h5>You can also ask question for this meetup</h5>
                 </div>
            </div>
            <!--!-->
            <div class="response">
             <form onsubmit="return Ask('${meet.meetup_id}')">
                 <div class="form-response askInput">
                      <input type="text" placeholder="title" name="title" 
                      class="responseInput"> 
                 </div>
                 <div class="form-response">
                  <textarea name="body" cols="30" rows="10" 
                  placeholder="write your question" class="responseText responseInput textAreaView"></textarea>
                 </div>
                 <div class="form-response">
                   <input type="submit" class="respBtn" value="Publish">
                 </div>
                 <small class="textMuted" key="body-error"></small>
                 <small class="textMuted" key="title-error"></small>
             </form>
             <h5 class='askMsg'></h5>
            </div>
          </div>
        </div>
      </div>
      <div class="meet-link onView">
        <div class="linkFixed">
          <div class="ft-link goback"  title="go back">
            <a href="/#/home">
              <img src="/src/assets/images/icons/blackIcons/return.svg" alt="goback">
            </a>
          </div>
        </div>
      </div>
    </div>`)}`);
export default SingleMeetup;
