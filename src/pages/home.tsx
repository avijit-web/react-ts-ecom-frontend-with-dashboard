import Header from "../components/Header";
import { Link } from "react-router";
import ProductCard from "../components/product-cart";

function Home() {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <Header />

      <section></section>

      <h1>
        Latest Products
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="abasdas"
          name="mac"
          price={2442}
          stock={452}
          handler={addToCartHandler}
          photo="https://images.pexels.com/photos/31696749/pexels-photo-31696749.jpeg?_gl=1*1b985py*_ga*MTU4MDE1NzczMC4xNzkxMTE2Nzg4*_ga_8JE65Q40S6*czE3OTExMTg4NjEkbzIkZzEkdDE3OTExMjA1ODAkajM4JGwwJGgw"
        />
      </main>
    </div>
  );
}

export default Home;
