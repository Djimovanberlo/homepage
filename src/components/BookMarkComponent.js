import React from "react";
import Grid from "@material-ui/core/Grid";

import { cardData1, cardData2 } from "../data/cardData";
import CardComponent from "./CardComponent";

const BookMarkComponent = () => {
  return (
    <div>
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
