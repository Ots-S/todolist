import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  toDoContainer: {
    border: "1px solid lightblue",
  },
});

function ToDo() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.toDoContainer} mt={2}>
        <Typography variant="h5" align="center">
          TO DO
        </Typography>
      </Box>
    </div>
  );
}

export default ToDo;
