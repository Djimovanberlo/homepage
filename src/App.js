import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardMedia, Box } from "@material-ui/core";

import { cardData1, cardData2 } from "./data/cardData";
import CardComponent from "./components/CardComponent";
import BookMarkComponent from "./components/BookMarkComponent";
import testImg from "./images/testImg.jpg";

// 1. kolommen, cards
// 2. remove (kruisj) && add (form met enter)
// 3. mouseover: show form
// 4. mad styling

// Card: header(string), Links(array[strings+url])

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: { height: 550 },
}));

console.log(testImg);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        {/* <Grid item md={6} color="red" height="140" width="100"> */}
        <Grid container direction="row" justify="space-evenly">
          <Box width={1} align="center">
            <CardMedia className={classes.media} image={testImg} />
          </Box>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignitems="stretch"
        >
          <BookMarkComponent />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
