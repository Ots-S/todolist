import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";

const useStyles = makeStyles({
  doneContainer: {
    border: "solid 1px lightgreen",
    height: "50em",
  },
});

export default function Done(props) {
  const classes = useStyles();
  const [collectedProps, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      drop: (item, monitor) => console.log(item),
    }),
  });

  return (
    <div ref={drop}>
      <Box className={classes.doneContainer} mt={2}>
        <Typography variant="h5" align="center">
          {props.todo}
        </Typography>
        <h1>{props.todo}</h1>
      </Box>
    </div>
  );
}