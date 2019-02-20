import Utils from "./src/component/router/Utils.js";
import Router from "./src/component/router/Router.js";
import Token from "./src/component/auth/CheckTokenExp.js";
import NotFound from "./src/component/NotFound.js";

const router = Router;
//check for token expired
Token();
const Redirect = async () => {
  const App = null || document.querySelector("#app");
  //
  const request = Utils.parseRequestUrl();
  //@here i need to combine path into one route
  const parsedUrl = (request.resource ? `/${request.resource}` : "/") + (request.id ? "/:id" : "") + (request.verb ? `/${request.verb}` : "");
  //now i am going to check if parsedUrl is exist
  const page = router[parsedUrl] ? router[parsedUrl] : NotFound;
  App.innerHTML = await page.render();
  await page.after_render();
};

window.addEventListener("hashchange", Redirect);
window.addEventListener("load", Redirect);
