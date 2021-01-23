import React, { useState, useContext } from "react";
import "./header.css";
import { ShoppingListContext } from "../context/context";

import { IconButton } from "@material-ui/core";

const Header = () => {
  const randomID = () => Math.floor(Math.random() * 9999999);

  const [newProduct, setNewProduct] = useState("");
  const { handleNewProduct } = useContext(ShoppingListContext);

  const handleInput = (e) => {
    setNewProduct(e.target.value);
  };

  return (
    <div className='header'>
      <form
        className='header__form'
        onSubmit={(e) => {
          e.preventDefault();
          if (newProduct) {
            handleNewProduct({
              id: randomID(),
              name: newProduct,
              isBought: false,
            });
            setNewProduct("");
          }
        }}
      >
        <input
          value={newProduct}
          placeholder='product...'
          className='header__input'
          onChange={handleInput}
        />
        <IconButton className='header__button' type='submit'>
          <span className='fas fa-plus'></span>
        </IconButton>
      </form>
    </div>
  );
};

export default Header;
