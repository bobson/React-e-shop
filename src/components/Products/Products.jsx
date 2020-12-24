import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product.jsx";

import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "$50",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.worldoffemale.com%2Fwp-content%2Fuploads%2F2018%2F03%2F1-12.jpg&f=1&nofb=1",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook.",
    price: "$500",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZ15BIKYTu5E%2Fmaxresdefault.jpg&f=1&nofb=1",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
