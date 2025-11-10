
export default function ProductCard({
  image,
  title,
  price,
  rating,
  tag,
}) {
  return (
    <div className="card">
      {tag && <span className={`tag ${tag === "Promo" ? "promo" : "novo"}`}>{tag}</span>}
      <div className="image-wrapper">
        {image ? <img src={image} alt={title} /> : <span>Imagem</span>}
      </div>
      <div className="info">
        <h3 className="title">{title}</h3>
        <p className="price">{price}</p>
        <div className="rating">
          {"★".repeat(rating)}{"☆".repeat(5 - rating)}
        </div>
        <button className={`btn`}>Adicionar</button>
      </div>
    </div>
  );
}
