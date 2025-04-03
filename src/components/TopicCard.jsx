function TopicCard({ topic }) {
  return (
    <li>
      <img className="topic-image" src={topic.img_url || "src/assets/filip-mishevski-c5QdMcuFlgY-unsplash.jpg"} alt={topic.slug} />
      <h3>{topic.slug}</h3>
      <p>{topic.description}</p>
    </li>
  );
}

export default TopicCard;
