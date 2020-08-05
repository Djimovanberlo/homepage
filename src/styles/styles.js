export const cardStyles = {
  root: {
    minWidth: 275,
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 200,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 550,
    flexGrow: 1,
  },
  pos: {
    marginBottom: 12,
  },
  hover: {
    opacity: 0,
    transition: "0.5s",
    "&:hover": {
      opacity: 1,
    },
  },
};
