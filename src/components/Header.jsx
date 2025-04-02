import Nav from "./Nav";
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <h1>NC News</h1>
      <Link to="/">
        <img className="logo" src="src/assets/NC News-.png" alt="NC News logo" />
      </Link>
      <Link to="profile">
      <img className="avatar" src="https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141" alt="user avatar Mr Jelly" />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
