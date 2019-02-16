import InputField from "../common/InputField.js";
import Load from "../common/Load.js";
import AuthCss from "../../assets/js/cssx/auth.css.js";

class Register {
  render() {
    if (localStorage.token) {
      if (currentUser().isAdmin===true) {
        window.location="/#/dashboard";
      }else{
        window.location="/#/home";
      }
    }
    const markUp = `
        ${AuthCss}
        ${Load}
        <div class="success" id="success">

        </div>
        <div class="authentication">
       <div class="auth-page">
      <div class="logo">
      <h1>Questioner</h1>
    </div>
    <div class="title">
      <h3>Sign Up</h3>
    </div>
    <!--form!-->
    <div class="auth-form register">
      <form class="form" autocomplete="off" onsubmit="return signup(event)">
        <div class="form-group">
          <div class="divide">
            ${InputField({
            type: "text",
            img: "./assets/images/icons/auth/ninja.svg",
            name: "firstname",
            placeholder: "Your firstname",
            value: "",
            keys: "firstname-error"
          })}
          </div>
          <div class="divide">
            ${InputField({
            type: "text",
            img: "./assets/images/icons/auth/ninja.svg",
            name: "lastname",
            placeholder: "Your lastname",
            value: "",
            keys: "lastname-error"
          })}
          </div>
        </div>
        <div class="form-group">
            <div class="divide">
              ${InputField({
              type: "text",
              img: "./assets/images/icons/auth/ninja.svg",
              name: "username",
              placeholder: "Your username",
              value: "",
              keys: "username-error"
            })}
            </div>
            <div class="divide">
              ${InputField({
              type: "email",
              img: "./assets/images/icons/auth/arroba.svg",
              name: "email",
              placeholder: "Your email",
              value: "",
              keys: "email-error"
            })}
            </div>
          </div>
          <div class="form-group">
            <div class="divide">
              ${InputField({
              type: "number",
              img: "./assets/images/icons/auth/arroba.svg",
              name: "phoneNumber",
              placeholder: "Your phone number",
              value: "",
              keys: "phone-error"
            })}
            </div>
            <div class="divide">
              ${InputField({
              type: "password",
              img: "./assets/images/icons/auth/pass.svg",
              name: "password",
              placeholder: "Your password",
              value: "",
              keys: "password-error"
            })}
            </div>
          </div>
        <div class="form-group">
          <center>
            <button type="submit" name="button" class="signInBtn signUpBtn">Sign Up</button>
          </center>
        </div>
        </form>
        <div class="other-links">
          <ul>
            <li>
              <a href="/#/">Back to home</a>
            </li>
            <li>
              <a href="/#/signin">Sign In instead</a>
            </li>
          </ul>
        </div>
    </div>
 </div>
</div>`;
    return markUp;
  }
  async after_render(){}
}

export default new Register();
