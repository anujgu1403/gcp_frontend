import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Spinner from "../helpers/Spinner";

const styles = theme => ({
  productsComponent: {
    margin: "180px 0 20px 0",
    [theme.breakpoints.down("sm")]: {
      margin: "95px 20px 20px 20px"
    },
    [theme.breakpoints.down("xs")]: {
      margin: "130px 0px 20px 0px"
    }
  },
  categories: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  item: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5px"
    }
  },
  categoriesHeading: {
    borderBottom: "1px solid lightgrey",
    padding: "5px 0",
    fontSize: "20px"
  },
  sideNav: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  gridHide: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  spinnerDiv: {
    textAlign: "center",
    marginTop: "5%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10px"
    }
  },
  marginSet: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px"
    }
  }
});

function SearchOutput({ airesults, classes, isLoading }) {
  // console.log("airesults",airesults);

  const spinner =
    !airesults || (airesults && airesults.length === 0) ? (
      isLoading ? (
        <div className={classes.spinnerDiv}>
          <Spinner />
        </div>
      ) : (
        <div className={classes.spinnerDiv}>
          <h1>No products found</h1>
        </div>
      )
    ) : (
      <Grid container spacing={16} className={classes.marginSet}>
        {airesults.map(product => (
          <Grid item lg={3} md={4} sm={4} xs={6} key={product.skuId}>
            <div>
              <Link
                to={`/store/product/${product.skuId}`}
                className={classes.item}
              >
                <div className="productWrapper">
                  <div className="imageWrapper">
                    <img src={product.images[0]} alt="mac book prop" />
                  </div>
                  <div className="productDetail">
                    <div className="title">{product.productName}</div>
                    <div className="price">
                      {product.currencyCode === "USD" && "$"}
                      <span>{product.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  return (
    <div className={classes.productsComponent}>
      <Grid container spacing={16}>
        <Grid item lg={12} md={12} sm={12}>
          {spinner}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(SearchOutput);
