import Utils from "./src/component/router/Utils.js";
import Router from "./src/component/router/Router.js";
import Token from "./src/component/auth/CheckTokenExp.js";

const router = Router;
//check for token expired
Token();
const Redirect = async () => {
  const App = null || document.querySelector("#app");
  //
  let request = Utils.parseRequestUrl();
  //@here i need to combine path into one route
  let parsedUrl = (request.resource ? "/" + request.resource : "/") + (request.id ? "/:id" : "") + (request.verb ? "/" + request.verb : "");
  //now i am going to check if parsedUrl is exist
  let page = router[parsedUrl] ? router[parsedUrl] : "sorry bro";
  App.innerHTML = await page;
}

window.addEventListener("hashchange", Redirect);
window.addEventListener("load", Redirect);
