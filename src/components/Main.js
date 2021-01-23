import React, { useContext } from "react";
import "./main.css";
import Product from "./Product";
import { ShoppingListContext } from "../context/context";

const Main = ({ products, showAll }) => {
  const { handleProductIsBought, handleRemoveProduct } = useContext(
    ShoppingListContext
  );

  products = products.sort((a, b) => a.isBought - b.isBought);
  return (
    <div className='main'>
      {!products.length ? (
        <h4 className='main__emptyList'>There is no products on your list.</h4>
      ) : (
        <ul className='main__list'>
          {showAll
            ? products.map(({ id, isBought, name }) => (
                <Product
                  key={id}
                  id={id}
                  isBought={isBought}
                  name={name}
                  handleProductIsBought={handleProductIsBought}
                  handleRemoveProduct={handleRemoveProduct}
                />
              ))
            : products
                .filter((product) => !product.isBought)
                .map(({ id, isBought, name }) => (
                  <Product
                    key={id}
                    id={id}
                    isBought={isBought}
                    name={name}
                    handleProductIsBought={handleProductIsBought}
                    handleRemoveProduct={handleRemoveProduct}
                  />
                ))}
        </ul>
      )}
    </div>
  );
};

export default Main;
