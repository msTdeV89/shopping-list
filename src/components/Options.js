import React, { useContext, useState } from "react";
import "./options.css";
import { ShoppingListContext } from "../context/context";

import {
  Switch,
  FormControlLabel,
  Button,
  Popover,
  Typography,
} from "@material-ui/core";

const Options = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { handleShowAll, showAll, handleClearAll, products } = useContext(
    ShoppingListContext
  );
  const handleOpenPopUp = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClosePopUp = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const boughtProducts = products.filter((product) => product.isBought);

  return (
    <div className='options'>
      <Button
        aria-describedby={id}
        onClick={handleOpenPopUp}
        color='primary'
        variant='contained'
        className='options__clear'
        size='small'
        disabled={products.length ? false : true}
      >
        Clear All
      </Button>
      <FormControlLabel
        label={`${showAll ? "Hide Bought" : "Show All"}`}
        disabled={boughtProducts.length ? false : true}
        control={
          <Switch
            color='primary'
            onChange={(e) => {
              handleShowAll(e);
            }}
          />
        }
      />
      <Popover
        className='options__popup'
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopUp}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography>Are you sure?</Typography>
        <div className='options__popupGroup'>
          <Button
            variant='contained'
            color='primary'
            className='options__popupBtn'
            onClick={() => {
              handleClosePopUp();
            }}
          >
            No
          </Button>
          <Button
            variant='contained'
            color='primary'
            className='options__popupBtn'
            onClick={() => {
              handleClosePopUp();
              handleClearAll();
            }}
          >
            Yes
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default Options;
