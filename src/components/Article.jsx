import { useEffect, useState } from "react"
import { getArticle } from "../api";
import Loading from "./Loading";
import Error from "./Error";

function Article(){
  const [article, setArticle] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    getArticle()
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
        setError({status:404, msg: 'Failed to load the article'});
      })
      .finally(() => {
        setIsLoading(false);
      });
  },[])

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return(
    <div>
      <h2>article will go here</h2>
    </div>
  )

}


export default Article

{/* 
     const [vote, setVote] = useState(0)
    <div className="card">
<button onClick={() => setCount((vote) => vote + 1)}>
  vote is {vote}
</button>

</div> */}