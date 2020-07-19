import React from 'react';
import { Draggable } from "react-beautiful-dnd"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    taskContainer: {
        border: "solid 1px lightgreen",
        height: "3em",
        width: "20em"
    },
    taskOnDragging: {
        backgroundColor: "lightgreen"
    }
});

function Task(props) {
    const classes = useStyles();
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Grid container alignItems="center" className={snapshot.isDragging ? classes.taskOnDragging : classes.taskContainer}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    innerRef={provided.innerRef}
                >
                    <Grid>
                        {props.task.content}
                    </Grid>
                </Grid>
            )
            }
        </Draggable >
    )
}

export default Task;
