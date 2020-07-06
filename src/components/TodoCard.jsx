import React from "react";
import { Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  toDoContainer: {
    border: "1px solid darkblue",
  },
});

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

export default function TodoCard(props, { isDragging, text }) {
  const classes = useStyles();
  const [{ opacity }, dragRef] = useDrag({
    item: { type: ItemTypes.CARD, text },
    collect: (monitor) => ({
      opcaity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <div ref={dragRef} style={{ opacity }}>
      <Box p={2} bgcolor="info.main" className={classes.toDoContainer}>
        <WhiteTextTypography>{props.todo}</WhiteTextTypography>
      </Box>
    </div>
  );
}
