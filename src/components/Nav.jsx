import { Link } from "react-router"

function Nav(){
    return (
        <nav>
            <Link to="/articles"><li className="nav">Articles</li></Link>
            <Link to="Topics"><li className="nav">Topics</li></Link>
        </nav>
    )
}

export default Nav