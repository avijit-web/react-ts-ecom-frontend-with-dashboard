import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState<string>("");

  const [sort, setSort] = useState<string>("");

  const [maxPrice, setMaxPrice] = useState<number>(100000);

  const [category, setCategory] = useState<string>("");

  const [page, setPage] = useState<number>(1);

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
      </aside>
      <main></main>
    </div>
  );
}

export default Search;
