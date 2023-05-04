import React from "react";
import { useDrag } from "react-dnd";

export const  Picture = ({ id, imageUrl }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <img
            ref={drag}
            src={imageUrl}
            width="150px"
            style={{ border: isDragging ? "5px solid pink" : "0px" }}
        />
    );
}
