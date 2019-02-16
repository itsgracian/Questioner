import Landing from "./layout/Landing.js";
import IndexCss from "../assets/js/cssx/index.css.js";
import Verify from "./auth/VerifyUser.js";
const NotFound = {
  render: () => {
    const markup = `
     ${IndexCss}
      ${Landing}
      <style type="text/css">
      .logo h1{
        color:#333!important;
      }
      .header{
        display:none!important;
      }
      .intro{
        color:#333!important;
      }
      .texting{
      font-weight: bold!important;
      color: #333!important;
      font-size: 1rem!important;
      }
      .buttons button{
        border-radius:30px!important;
        height:50px!important;
      }

      </style>
      <section class='NotFound'>
      <div class='inside'>
         <div class='logo'>
           <h1>Questioner</h1>
         </div>
         <div class='intro'>
           <h2>404 Error</h2>
         </div>
         <div class="on404Error">
           <h5 class="texting">
            Page You are looking for could not be found.
          </h5>
         </div>
         <div class='buttons'>
          ${Verify()}
         </div>
      </div>
    </section>
  `;
    return markup;
  },
  after_render:()=>{}
}
export default NotFound;
