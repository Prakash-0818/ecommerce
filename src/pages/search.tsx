import { useState } from "react";
import ProductCard from "../components/productCard";
const products = [
    {
      productId: "lap1",
      photo: "https://m.media-amazon.com/images/I/316ArzLeJ2L._MCnd_AC_.jpg",
      name: "macbook m1",
      stock: 10,
      quantity: 2,
      price: 68124,
    },
    {
      productId: "lap2",
      photo: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY218_.jpg',
      name: "macbook m2",
      stock: 4,
      quantity: 1,
      price: 89775,
    }
  ]

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const isPrevPage = page > 1;
  const isNextPage =  page < 4;
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to high)</option>
            <option value="dcs">Price (High to low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price : {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="laptop">Laptop</option>
            <option value="mobile">Mobile</option>
            <option value="fashion">Fashion</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-product-list">
        {
          products.map((i)=> <ProductCard key={i.productId} products={i}/>)
        }
        </div>
      </main>
      <article>
        <button disabled={!isPrevPage} onClick={()=> setPage((prev)=> prev -1)}>Prev</button>
        <p>{page}</p>
        <button disabled={!isNextPage} onClick={()=>setPage((prev)=>(prev+1))}>Next</button>
      </article>
      
    </div>
  );
};
export default Search;
