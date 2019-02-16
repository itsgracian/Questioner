import InputField from "../common/InputField.js";
import Load from "../common/Load.js";
import AuthCss from "../../assets/js/cssx/auth.css.js";
class Login {
  render() {
    if (localStorage.token) {
      if (currentUser().isAdmin===true) {
        window.location="/#/dashboard";
      }else{
        window.location="/#/home";
      }
    }
    //updating dom form error
    const small = document.querySelectorAll(".textMuted");
    const markUp = (`
      ${AuthCss}
      ${Load}
      <div class="authentication">
     <div class="auth-page">
       <div class="logo">
          <h1>Questioner</h1>
        </div>
        <div class="title">
          <h3>Sign In</h3>
        </div>
        <!--form!-->
        <div class="auth-form">
          <form class="login" autocomplete="off" onsubmit="return onSubmit(event)">
            <div class="form-group">
              ${InputField({
            type: "email",
            img: "/src/assets/images/icons/auth/user.svg",
            name: "email",
            placeholder: "Type your email",
            value: "",
            keys: "email-error"
            })}
            </div>
            <div class="form-group">
              ${InputField({
              type: "password",
              img: "/src/assets/images/icons/auth/pass.svg",
              placeholder: "Type your password",
              name: "password",
              value: "",
              keys: "password-error"
        })}
            </div>
            <div class="form-group">
              <button type="submit" name="button" class="signInBtn">Sign in</button>
            </div>
            <div class="other-links">
              <ul>
                <li>
                  <a href="/#/">Back to home</a>
                </li>
                <li>
                  <a href="/#/join">Create Account</a>
                </li>
              </ul>
            </div>
          </form>
        </div>
     </div>
    </div>
       `);
    return markUp;
  }
  async after_render(){}
}

export default new Login();
