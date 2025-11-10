import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
}
