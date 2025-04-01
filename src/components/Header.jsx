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
      <img className="avatar" src="src/assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="user avatar dark haired women in red top" />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
