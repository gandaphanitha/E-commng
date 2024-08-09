



import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCT_API } from "../constant/apiConstant";
import axios from "axios";
import "../css/ProductCards.css";

const ProductCards = () => {
  const { category } = useParams();
  const imageSize = { width: "150px", height: "150px" };
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [focused, setOnFocused] = useState(true);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const response = await axios.get(PRODUCT_API);
      setProducts(response.data);
      filterProducts(response.data);
    } catch (error) {
      console.error(`Error fetching product list`, error);
    }
  };

  const filterProducts = (products) => {
    if (category && category !== "all") {
      const filtered = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleSearch = (searchText) => {
    setOnFocused(true);
    const normalizedSearchText = searchText.toLowerCase();
    setSearchText(normalizedSearchText);

    const filteredData = products.filter((product) =>
      product.title.toLowerCase().includes(normalizedSearchText)
    );
    setFilteredProducts(filteredData);

    const suggestedData = products.filter((product) =>
      product.title.toLowerCase().startsWith(normalizedSearchText)
    );
    setSuggestions(suggestedData.slice(0, 5));
  };

  const handleSuggestionClick = (productTitle) => {
    setSearchText(productTitle);
    handleSearch(productTitle);
  };

  const handleToggleBlur = () => {
    setOnFocused(false);
  };

  const handleAddToCart = (product) => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductInCart = savedCart.some(item => item.id === product.id);
    if (!isProductInCart) {
      localStorage.setItem("cart", JSON.stringify([...savedCart, product]));
      alert(`${product.title} added to cart!`);
    } else {
      alert(`${product.title} is already in the cart.`);
    }
  };

  return (
    <div onClick={handleToggleBlur} style={{ textAlign: "center" }}>
      <input
        type="text"
        className="search-input"
        value={searchText}
        placeholder="Search Products...."
        onChange={(e) => handleSearch(e.target.value)}
      />
      
      <div className="suggestions">
        {focused &&
          suggestions.length > 0 &&
          suggestions.map((product, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(product.title)}
            >
              {product.title}
            </div>
          ))}
      </div>

      <div className="cardWrapper">
        {filteredProducts.length === 0 ? (
          <h1>No Products found</h1>
        ) : (
          filteredProducts.map((product, index) => (
            <div key={index} className="mainCard">
              <Link to={`/product/${product.id}`}>
                <div>
                  <img src={product.image} alt={product.title} style={imageSize} />
                  <h6>{product.title}</h6>
                  <h4>${product.price}</h4>
                  <div>
                    <span>{product.rating.rate}</span>
                  </div>
                </div>
              </Link>
              {/* <button onClick={() => handleAddToCart(product)}>Add to Cart</button> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCards;

