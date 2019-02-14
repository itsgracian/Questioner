import InputField from "../common/InputField.js";
import Load from "../common/Load.js";
import AuthCss from "../../assets/js/cssx/auth.css.js";
import CheckAuth from "./CheckAuth.js";

// //
// CheckAuth();
class Register {
  render() {
    const markUp = `
        ${AuthCss}
        <section class="showcase registerShow">
        ${Load}
        <div class="success" id="success">

        </div>
        <div class="auth">
          <div class="authentication-form registerForm">
             <div class="logo">
               <img src="image/icon/lov.png" alt="">
               <h5>Sign Up </h5>
             </div>
    <form class="form register" autocomplete="off" onsubmit="return signup(event)">
    <div class='groups'>
    ${InputField({
    label: "First Name",
    type: "text",
    img: "./assets/images/icons/auth/ninja.svg",
    name: "firstname",
    placeholder: "Type your firstname",
    value: "",
    keys: "firstname-error"
  })}
    ${InputField({
    label: "Last Name",
    type: "text",
    img: "./assets/images/icons/auth/ninja.svg",
    name: "lastname",
    placeholder: "Type your lastname",
    value: "",
    keys: "lastname-error"
  })}
    </div>
    <div class='groups'>
    ${InputField({
    label: "Username",
    type: "text",
    img: "./assets/images/icons/auth/ninja.svg",
    name: "username",
    placeholder: "Type your username",
    value: "",
    keys: "username-error"
  })}
    ${InputField({
    label: "Phone number",
    type: "number",
    img: "./assets/images/icons/auth/arroba.svg",
    name: "phoneNumber",
    placeholder: "Type your phone number",
    value: "",
    keys: "phone-error"
  })}
    </div>
    <div class='groups'>
    ${InputField({
    label: "Email",
    type: "email",
    img: "./assets/images/icons/auth/arroba.svg",
    name: "email",
    placeholder: "Type your email",
    value: "",
    keys: "email-error"
  })}
    ${InputField({
    label: "Password",
    type: "password",
    img: "./assets/images/icons/auth/pass.svg",
    name: "password",
    placeholder: "Type your password",
    value: "",
    keys: "password-error"
  })}
    </div>
              <div class="form-group loginBtn">
                <a href="/#/signin">
                Sign in instead
              </a>
                <input type="submit" name="register" value="sign up">
              </div>
            </form>
          </div>
          <div class='auth-menu'>
          <li><a href="/#">back home</a></li>
          </div>
        </div>
      </section>
       `;
    return markUp;
  }
}

export default new Register();
