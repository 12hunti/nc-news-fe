import { getTopics } from "../api";
import useApiRequest from "../hooks/useApiRequest";
import TopicCard from "./TopicCard";
import Loading from "./Loading";
import Error from "./Error";
import ErrorPage from "./ErrorPage";

function Topics() {
  const {
    data: topics,
    isLoading,
    error,
  } = useApiRequest(getTopics, "Failed to load topics");


  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

//   if(!topics){
//     return <ErrorPage/>
//   }
  return (
    <section className="topic-list">
      {topics.map((topic) => {
        return <TopicCard key={topic.slug} topic={topic} />;
      })}
    </section>
  );
}

export default Topics;
