import React from 'react';
import { Draggable } from "react-beautiful-dnd"
import { Grid } from "@material-ui/core"

function Task(props) {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided) => (
                <Grid
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    innerRef={provided.innerRef}
                >
                    {props.task.content}
                </Grid>
            )}
        </Draggable >
    )
}

export default Task;
