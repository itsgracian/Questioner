const MyQuestion = questions => (`
    ${questions.map(qt => `<div class="container">
      <div class="meetQ MyQuestionPage">
      <div class="title view-title" >
        <h5>${qt.title ? qt.title : ""}</h5>
        <br>
         <p><img src="/src/assets/images/icons/blackIcons/placeholder.svg" class="location">
        ${qt.topic ? qt.topic : ""}
        <span class="date">${qt.happening ? new Date(qt.happening).toDateString() : ""}</span></p>
      </div>
      <div class="q">
        <p>${qt.body}</p>
        <div class="add-comment">
         <a href="Javascript:void" onclick="ViewQuestions('/#/question/${qt.question_id}')"
         title="view all comment related to this question" class="comBtn">view comments
         </a>
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
/*
*/
export default MyQuestion;
