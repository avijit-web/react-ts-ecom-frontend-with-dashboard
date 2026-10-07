import React, { useState } from "react";
import ProductCard from "../components/product-cart";

function Search() {
  const [search, setSearch] = useState<string>("");

  const [sort, setSort] = useState<string>("");

  const [maxPrice, setMaxPrice] = useState<number>(100000);

  const [category, setCategory] = useState<string>("");

  const [page, setPage] = useState<number>(1);

  const addToCartHandler = () => {};

  const isNextPage = page < 4;
  const isPrevPage = page > 1;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select
            name=""
            id=""
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Select Sort Order</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
        <div>
          <h4>Max Price : {maxPrice || ""}</h4>
          <input
            type="number"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            name=""
            id=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search By Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-product-list">
          <ProductCard
            productId="abasdas"
            name="mac"
            price={2442}
            stock={452}
            handler={addToCartHandler}
            photo="https://images.pexels.com/photos/31696749/pexels-photo-31696749.jpeg?_gl=1*1b985py*_ga*MTU4MDE1NzczMC4xNzkxMTE2Nzg4*_ga_8JE65Q40S6*czE3OTExMTg4NjEkbzIkZzEkdDE3OTExMjA1ODAkajM4JGwwJGgw"
          />
        </div>

        <article>
          <button
            disabled={!isPrevPage}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <span>
            {page} of {4}
          </span>
          <button
            disabled={!isNextPage}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </article>
      </main>
    </div>
  );
}

export default Search;
