import React, { useState, useRef } from "react";
import { Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ItemTypes } from "./Constants";
import { makeStyles } from "@material-ui/core/styles";
import { useDrag, useDrop } from "react-dnd"

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

const TodoCard = ({ item, index, moveItem, status }, props) => {
  const ref = useRef(null);

  const [, drop] = useDrop(
    {
      accept: ItemTypes,
      hover(item, monitor) {
        if (!ref.current) {
          return;
        }
        const dragIndex = item.index
        const hoverIndex = index

        if (dragIndex === hoverIndex) {
          return;
        }
        const hoveredRect = ref.current.getBoundClientRect();
        const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top / 2)
        const mousePosition = monitor.getClientOffset()
        const hoverClientY = mousePosition.y - hoveredRect.top
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        } if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }
        moveItem(dragIndex, hoverIndex)
        item.index = hoverIndex
      }
    })
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes, ...item, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const [show, setShow] = useState(false)
  const onOpen = () => setShow(true)
  const onClose = () => setShow(false)

  drag(drop(ref))

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0 : 1 }}>
      <Box
        p={2}
        bgcolor="info.main"
        hideSourceOnDrag={true}
      >
        <WhiteTextTypography p={2} bgcolor="info.main">
          {props.todo}
        </WhiteTextTypography>
      </Box>
    </div>
  );
}

export default TodoCard