import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { cardData } from "../src/data/cardData";
import CardComponent from "./components/CardComponent";

// 1. kolommen, cards
// 2. remove (kruisj) && add (form met enter)
// 3. mouseover: show form
// 4. mad styling

// Card: header(string), Links(array[strings+url])

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  console.log(cardData);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={4} color="red" height="140" width="100">
          <Grid container spacing={2}>
            {cardData.map((card) => {
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
        <Grid item md={4} color="red" height="140" width="100">
          <Grid container spacing={2}>
            {cardData.map((card) => {
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
      </Grid>
    </div>
  );
}

export default App;
