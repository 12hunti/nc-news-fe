import { Link } from "react-router";

function TopicCard({ topic }) {
  return (
    <Link to={`/articles?topic=${topic.slug}`}>
    <li>
      <img className="topic-image" src={topic.img_url || "src/assets/filip-mishevski-c5QdMcuFlgY-unsplash.jpg"} alt={topic.slug} />
      <h3>{topic.slug}</h3>
      <p>{topic.description}</p>
    </li>
    </Link>
  );
}

export default TopicCard;
