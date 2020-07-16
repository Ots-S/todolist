import React from 'react';
import { Typography, Grid } from "@material-ui/core"
import Task from './Task'
import { Droppable } from "react-beautiful-dnd"

function Column(props) {
    return (
        <Grid container direction="column">
            <Typography> {props.column.title}</Typography>
            <Droppable droppableId={props.column.id}>
                {provided => (
                    <Grid
                        innerRef={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <Typography>{props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                        </Typography>
                        {provided.placeholder}
                    </Grid>
                )}
            </Droppable>
        </Grid >
    )
}

export default Column;
