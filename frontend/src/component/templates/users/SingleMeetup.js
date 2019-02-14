const SingleMeetup=(meetup,totalQuestions)=>{
 return(`
    ${meetup.map(meet=>`<div class="container">
      <div class="more-about">
        <div class="title view-title" >
          <h5>${meet.topic? meet.topic : ""}</h5>
          <br>
          <p><img src="/src/assets/images/icons/blackIcons/placeholder.svg" class="location">
          ${meet.location? meet.location : ""}
           <span class="date">${meet.happening? new Date(meet.happening).toDateString() : ""}</span></p>
        </div>
        <div class="bImg">
         <img src="${meet.images? meet.images[0] : `http://localhost:5000/images/default-45.jpg`}" alt="">
        </div>
        <div class="asked-question">
          <div class="ft-link totalQuestions" title="View asked questions on this meet-up">
            <a href="Javascript:void" onclick="MeetupAskedQ('/#/meetup-q/${meet.meetup_id}')">
              <img src="/src/assets/images/icons/blackIcons/ask.svg" alt="ask question">
            </a>
          </div>
          <h5>${totalQuestions ? totalQuestions+" questions was created on this meetup":
          "There is no question on this meetup"}</h5>
        </div>
        <!--askquestion!-->
        <div class="askMeetup">
          <h1>Ask Question</h1>
          <form onsubmit="return Ask('${meet.meetup_id}')">
          <div class="askInput">
          <input type="text" name="title" value="" placeholder="question title">
          </div>
            <div>
            <textarea name="body" class="textAreaView"
             placeholder="feel free to ask your question"></textarea>
             <small class="textMuted" key="body-error"></small>
             <small class="textMuted" key="title-error"></small>
            </div>
            <h5 class="askMsg"></h5>
            <input type="submit" name="ask" value="save question" class="saveQ">
          </form>
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
}
export default SingleMeetup;
