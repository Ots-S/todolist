import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  doneContainer: {
    border: "solid 1px lightgreen",
  },
});

function Done() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.doneContainer} mt={2}>
        <Typography variant="h5" align="center">
          DONE
        </Typography>
      </Box>
    </div>
  );
}

export default Done;
