import React from "react";
import "./product.css";

import { Button } from "@material-ui/core";

const Product = ({
  id,
  name,
  isBought,
  handleRemoveProduct,
  handleProductIsBought,
}) => {
  return (
    <li className='product__container'>
      <Button
        className={`${!isBought ? "product" : "product product--isBought"}`}
        color='primary'
        variant='contained'
        size='small'
        onClick={() => handleProductIsBought(id)}
      >
        <span className='product__name'>{name}</span>
      </Button>
      <Button
        color='secondary'
        variant='contained'
        className='product__delete '
        onClick={() => {
          handleRemoveProduct(id);
        }}
      >
        <span className='far fa-trash-alt'></span>
      </Button>
    </li>
  );
};

export default Product;
