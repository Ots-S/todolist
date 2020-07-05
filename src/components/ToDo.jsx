import React from "react";
import { Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const useStyles = makeStyles({
  toDoContainer: {
    border: "1px solid lightblue",
  },
});

export default function ToDo(props) {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.toDoContainer} mt={2}>
        <Typography variant="h5" align="center">
          TO DO
        </Typography>
        {props.todos.map((todo) => (
          <Box p={2} bgcolor="info.main">
            <WhiteTextTypography key={todo}>{todo}</WhiteTextTypography>
          </Box>
        ))}
      </Box>
    </div>
  );
}
