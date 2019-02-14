const Upcoming=(meetups)=>{
  let total=[];
  return (`
    ${meetups.map(meet=>`
      <div class="container">
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
              <div class="asked-question" title="View asked questions on this meet-up">
                <div class="ft-link totalQuestions">
                  <a href="Javascript:void" onclick="MeetupAskedQ('/#/meetup-q/${meet.meetup_id}')">
                    <img src="/src/assets/images/icons/blackIcons/ask.svg" alt="askedQuestion">
                  </a>
                </div>
                <h5> views asked question</h5>
              </div>
              <div class="asked-question crt" title="View this meet-up">
                <div class="ft-link totalQuestions" id="createq">
                  <a href="Javascript:void" onclick="MeetupView('/#/meetup-m/${meet.meetup_id}')">
                    <img src="/src/assets/images/icons/blackIcons/conversation.svg" alt="ask question">
                  </a>
                </div>
                <h5> views this meetup</h5>
              </div>
            </div>
            <div class="meet-link">
              <div class="linkFixed">
                <div class="ft-link" id="createq" title="view this meetup">
                  <a href="Javascript:void" onclick="MeetupView('/#/meetup-m/${meet.meetup_id}')">
                    <img src="/src/assets/images/icons/blackIcons/conversation.svg">
                  </a>
                </div>
              </div>
            </div>
          </div>
  `)}`);
}
export default Upcoming;
