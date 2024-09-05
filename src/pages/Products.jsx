import React, { useState, useEffect } from "react";
import { getProducts } from "../services/products";

function Products() {
    const [ products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => setProducts(data));
    }, []);
    return (
        <div>
          <h1>Products</h1>
          <ul>
            {Array.isArray(products) ? (
              products.map(product => (
                <li key={product.id}>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </li>
              ))
            ) : (
              <p>No products available</p>
            )}
          </ul>
        </div>
      );
    }
    export default Products