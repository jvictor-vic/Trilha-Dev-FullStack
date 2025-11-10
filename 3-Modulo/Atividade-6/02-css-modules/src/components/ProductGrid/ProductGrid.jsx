import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css"

export default function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
}
