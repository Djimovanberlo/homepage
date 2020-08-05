import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardMedia, Box } from "@material-ui/core";

import { cardData1, cardData2 } from "../data/cardData";
import { cardStyles } from "../styles/styles";
import CardComponent from "./CardComponent";

const BookMarkComponent = () => {
  const useStyles = makeStyles(cardStyles);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignitems="stretch"
        >
          {cardData1.map((card) => {
            return (
              <CardComponent
                md={4}
                key={card.id}
                title={card.title}
                links={card.links}
              />
            );
          })}
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignitems="stretch"
        >
          {" "}
          {cardData2.map((card) => {
            return (
              <CardComponent
                key={card.id}
                title={card.title}
                links={card.links}
              />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default BookMarkComponent;
