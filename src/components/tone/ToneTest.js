import React from "react";
import { useDrag } from "react-dnd";

export const ToneTest = ({ id, imageUrl, key}) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "images",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <img
            ref={drag}
            src={imageUrl}
            key={key}
            width="150px"
            style={{ border: isDragging ? "5px solid pink" : "0px" }}
        />
    );
}
