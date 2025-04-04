import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1743758661876.json";

function ErrorPage() {
  return (
    <main>
      <h2>404 Page Not Found</h2>
      <Lottie animationData={animationData} loop={true} />
    </main>
  );
}

export default ErrorPage;
