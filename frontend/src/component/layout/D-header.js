const Header = {
  head: (source) => {
    //first remove all attribute
    const Linked = document.querySelectorAll("head link");
    Linked.forEach((lik) => {
      lik.href = source;
    });
    return Linked;
  },
  script: () => {
    const body = document.querySelector("body");
    const script = document.createElement("script");
    script.setAttribute("src", "/src/assets/js/home.js");
    body.appendChild(script);
  }
};
export default Header;
