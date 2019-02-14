import Landing from "./layout/Landing.js";
import IndexCss from "../assets/js/cssx/index.css.js";
const Index = {
  render: () => {
    const markup = `
     ${IndexCss}
      ${Landing}
      <section class='home'>
      <div class='inside'>
         <div class='logo'>
           <h1>Questioner</h1>
         </div>
         <div class='intro'>
           <h2>Getting started</h2>
         </div>
         <div class='intro'>
           <h3> and do more with Questioner</h3>
         </div>
         <div class='buttons'>
          <a href='#/signin'>
           <button type='button' name='button' class='signInBtn'>Sign in</button>
          </a>
          <a href='#/join'>
           <button type='button' name='button' class='signUpBtn'>Join Questioner</button>
          </a>
         </div>
      </div>
    </section>
    <section class='know'>
      <div class='inside'>
         <div class='logo'>
           <h1>Questioner</h1>
         </div>
         <div class='intro'>
           <h2>Know Questioner</h2>
         </div>
         <div class='knowText'>
           <h5 class='texting'>
              Questioner​​ helps the meetup organizer prioritize
             questions to be answered. Other users can vote on asked
             questions and they bubble to the top or bottom of the log.
          </h5>
         </div>
         <div class='buttons'>
          <a href='#/signin'>
           <button type='button' name='button' class='signInBtn'>Sign in</button>
          </a>
          <a href='#/join'>
           <button type='button' name='button' class='signUpBtn'>Join Questioner</button>
          </a>
         </div>
      </div>
    </section>
    <section class='footer'>
      <div class='inside'>
         <div class='logo'>
           <h1>Questioner</h1>
         </div>
         <div class='creatorImg'>
           <img src='/src/assets/images/avatar.png' alt='image'>
         </div>
         <div class='bye'>
           <h5 class='texting'>created by &copy; gratian tuyishimire</h5>
         </div>
         <div class='bye'>
           <h5 class='texting'>${new Date().getFullYear()} &copy; all right reserved.</h5>
         </div>
      </div>
    </section>`;
    return markup;
  }
}
export default Index;
