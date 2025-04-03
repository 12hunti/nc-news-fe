function TopicCard({ topic }) {
  return (
    <li>
      <img src={topic.img_url} alt={topic.slug} />
      <h3>{topic.slug}</h3>
      <p>{topic.description}</p>
    </li>
  );
}

export default TopicCard;
