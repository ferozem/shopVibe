import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "../styles/product.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setFilteredProducts(res.data);
        const uniqueCats = ["all", ...new Set(res.data.map((p) => p.category))];
        setCategories(uniqueCats);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchData();
  }, []);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setCurrentPage(1);

    if (category === "all") {
      setFilteredProducts(products);
    } else setFilteredProducts(products.filter((p) => p.category === category));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={i === currentPage ? "active-page" : ""}
        >
          {i}
        </button>
      );
    }
    return pages;
  };
  console.log(renderPagination());

  return (
    <div className="product-page">
      <div className="filter-bar">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((cat) => (
            <option value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="product-list">
        {currentItems.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      <div className="pagination-bar">{renderPagination()}</div>
    </div>
  );
};

export default ProductList;
