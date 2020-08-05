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
    position: "relative",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
    overflow: "auto",
    height: 800,
    flexGrow: 1,
  },
  pos: {
    marginBottom: 12,
  },
  hover: {
    position: "absolute",
    margin: 5,
    bottom: 0,
    left: 0,
    zIndex: 9,
    opacity: 0,
    transition: "0.5s",
    "&:hover": {
      opacity: 1,
    },
  },
};
