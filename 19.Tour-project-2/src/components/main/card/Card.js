function Card(props) {
  const { title, image, desc } = props;
  return (
    <div className="cards">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <img src={image} alt={title} />
      <div className="describe">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Card;
