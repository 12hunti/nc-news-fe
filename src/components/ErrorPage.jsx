import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1743758661876.json";
import { Link } from "react-router";

function ErrorPage({msg}) {
  return (
    <main>
      <h2>404 {msg}</h2>

      <Lottie animationData={animationData} loop={true} />
      <Link to="/articles">Back to Articles</Link>
      <br></br>
      <Link to="/topics">Back to Topics</Link>
     
    </main>
  );
}

export default ErrorPage;
