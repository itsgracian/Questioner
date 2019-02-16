import LandingCheck from "../auth/LandingCheck.js";
const Landing = (`<section class='header'>
<nav>
  <ul>
  ${LandingCheck()}
  </ul>
</nav>
</section>
`);

export default Landing;
