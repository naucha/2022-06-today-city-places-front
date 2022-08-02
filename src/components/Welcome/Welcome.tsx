import { Link } from "react-router-dom";
import WelcomeStyled from "./WelcomeStyled";

const Welcome = (): JSX.Element => {
  return (
    <WelcomeStyled>
      <div className="welcome__container">
        <p>
          Today City Places is a SPA made with React managing states with Redux
          (of course due to the scope of the project this is not necessary) and
          using Leaflet that serves to save places on the map.
          <br />
          <br />
          When adding a place you will only have to click on the map, put the
          name of the place, a description, a link to the web page, and a
          keyword to indicate the type of place. <br />
          <br />
        </p>
        <div>
          <Link to="/login">
            <span className="welcome__redirect">Login</span>
          </Link>
          <br />
          <Link to="/login">
            <span className="welcome__redirect">Register</span>
          </Link>
        </div>
      </div>
    </WelcomeStyled>
  );
};

export default Welcome;
