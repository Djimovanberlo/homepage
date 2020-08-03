import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { cardStyles } from "../styles";

const CardComponent = (props) => {
  const useStyles = makeStyles(cardStyles);
  const classes = useStyles();
  const { title, links } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>

        {links.map((singleLink) => {
          return (
            <Typography variant="body2" component="p" key={singleLink.id}>
              {singleLink.link}
            </Typography>
          );
        })}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;