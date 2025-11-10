import Navbar from "./components/Navbar"
import ProductGrid from "./components/ProductGrid";

const products = [
  {
    image: "https://soundmax.com.vn/images/2023/bt-300_up_web2.jpg",
    title: "Fone de Ouvido Bluetooth SoundMax Pro",
    price: "R$ 189,90",
    rating: 4,
    tag: "Promo",
  },
  {
    image: "https://cdn.leroymerlin.com.br/products/cafeteira_eletrica_aroma_plus_18x_127v_mallory_1572401904_e489_600x600.png",
    title: "Cafeteira Elétrica Aroma Plus 800W",
    price: "R$ 249,00",
    rating: 5,
    tag: "Novo",
  },
  {
    image: "https://m.media-amazon.com/images/I/61d1QKEdmvL._AC_SL1200_.jpg",
    title: "Tênis Esportivo RunFast 2.0",
    price: "R$ 329,99",
    rating: 4,
    tag: "Promo",
  },
  {
    image: "https://m.media-amazon.com/images/I/71yM-P7GjPL._AC_UF1000%2C1000_QL80_.jpg",
    title: "Relógio SmartFit Pulse 3",
    price: "R$ 459,90",
    rating: 5,
    tag: "Novo",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <br/>
      <main>
        <h1>🛍️ Meus Produtos</h1>
        <br/>
        <ProductGrid products={products} />
      </main>
    </>
  )
}

export default App
