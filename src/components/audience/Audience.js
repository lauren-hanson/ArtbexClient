import React from "react";
import { useDrag } from "react-dnd";

export const Audience = ({ id, image }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (

        <img
            className="images file-img"
            ref={drag}
            id={id}
            src={image}
            alt="Audience Image"
            width="150px"
            style={{ border: isDragging ? "5px solid pink" : "0px" }}
        />
    )
}