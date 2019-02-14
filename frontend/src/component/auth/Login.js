import InputField from "../common/InputField.js";
import Load from "../common/Load.js";
import AuthCss from "../../assets/js/cssx/auth.css.js";
import CheckAuth from "./CheckAuth.js";

// CheckAuth();
class Login {
  render() {
    const body = document.querySelector("body");
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "/src/assets/js/auth.js");
    //@appendChild
    body.appendChild(script);
    //updating dom form error
    const small = document.querySelectorAll(".textMuted");
    const markUp = (`
      ${AuthCss}
        <section class="showcase">
         ${Load}
        <div class="auth">
          <div class="authentication-form">
             <div class="logo">
               <img src="image/icon/lov.png" alt="">
               <h5>Sign in </h5>
             </div>
            <form class="form login" autocomplete="off" onsubmit="return onSubmit(event)">
            ${InputField({
        label: "Email",
        type: "email",
        img: "/src/assets/images/icons/auth/user.svg",
        name: "email",
        placeholder: "Type your email",
        value: "",
        keys: "email-error"
      })}
            ${InputField({
        label: "Password",
        type: "password",
        img: "/src/assets/images/icons/auth/pass.svg",
        placeholder: "Type your password",
        name: "password",
        value: "",
        keys: "password-error"
      })}
              <div class="form-group loginBtn">
              <a href="/#/join">Create account</a>
                <input type="submit" name="login" value="signin" class="btnSub">
              </div>
            </form>
          </div>
          <div class='auth-menu'>
          <li><a href="/#">back home</a></li>
          </div>
        </div>
      </section>
       `);
    return markUp;
  }
}

export default new Login();
