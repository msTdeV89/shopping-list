import React, { useState, useEffect, createContext } from "react";

export const ShoppingListContext = createContext();

const ShoppingListContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const handleInitialApp = async () => {
    if (!JSON.parse(localStorage.getItem("products"))) {
      localStorage.setItem("products", JSON.stringify(products));
    } else {
      const data = await JSON.parse(localStorage.getItem("products"));
      setProducts(data);
    }
  };

  useEffect(() => {
    handleInitialApp();
  }, []);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleNewProduct = async (product) => {
    setProducts([...products, product]);
  };
  const handleProductIsBought = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isBought: !product.isBought }
          : product
      )
    );
  };
  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  const handleClearAll = () => {
    setProducts([]);
  };
  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <ShoppingListContext.Provider
      value={{
        products,
        showAll,
        handleShowAll,
        handleNewProduct,
        handleProductIsBought,
        handleClearAll,
        handleRemoveProduct,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListContextProvider;
