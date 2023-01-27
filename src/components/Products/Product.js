import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import SearchBar from "../UI/SearchBar";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((err) => {
            let message = "Something went wrong";
            throw new Error(message);
          });
        }
      })
      .then((data) => {
        let transformedData = [];
        for (let key in data) {
          transformedData.push({
            title: data[key].title.split(" ")[0],
            image: data[key].image,
            id: data[key].id,
            price: data[key].price,
            category: data[key].category,
          });
        }
        setProducts(transformedData);
      })
      .catch((err) => alert(err.message));
  }, []);

  const searchHandler = (searchTerm) => {
    setSearchTerm(() => searchTerm);
  };

  return (
    <>
      <SearchBar onInputChange={searchHandler} />
      <ProductItem products={products} searchTerm={searchTerm} />
    </>
  );
};
export default Product;
