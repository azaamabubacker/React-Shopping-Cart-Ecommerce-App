import React from "react";

import classes from "./Product.module.css";

function Product(props) {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className={classes.product}>
      <img src={productImage} alt="Product Pictures" />
      <div className={classes.description}>
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Product;
