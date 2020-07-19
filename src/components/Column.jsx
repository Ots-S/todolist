import React from 'react';
import { Typography, Grid } from "@material-ui/core"
import Task from './Task'
import { Droppable } from "react-beautiful-dnd"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    taskContainer: {
        backgroundColor: "white",
        padding: "2em"
    },
    todoContainer: {
        padding: "1em",
        border: "1px solid black",
        margin: "2em"
    }
})

function Column(props) {
    const classes = useStyles();
    return (
        <Grid container item xs={3} alignItems="space-between" justify="space-between" direction="column" className={classes.todoContainer} >
            <Typography> {props.column.title}</Typography>
            <Droppable droppableId={props.column.id}>
                {(provided, snapshot) => (
                    <Grid item
                        innerRef={provided.innerRef}
                        {...provided.droppableProps}
                        className={classes.taskContainer}
                    >
                        {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                        {provided.placeholder}
                    </Grid>
                )}
            </Droppable>
        </Grid >
    )
}

export default Column;
