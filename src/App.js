import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Box, Fade } from "@material-ui/core";

import BookMarkComponent from "./components/BookMarkComponent";
import testImg from "./images/testImg.jpg";
import { cardStyles } from "./styles/styles";

const App = () => {
  const useStyles = makeStyles(cardStyles);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container direction="row" justify="space-evenly">
          <Box width={1} align="center">
            <CardMedia className={classes.media} image={testImg} />
          </Box>
        </Grid>
        <Grid
          className={classes.hover}
          container
          direction="row"
          justify="space-evenly"
          alignitems="stretch"
        >
          <Fade>
            <BookMarkComponent />
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
