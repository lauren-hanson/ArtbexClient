import React from "react";
import { useDrag } from "react-dnd";

export const Tone = ({ id, src, text }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "IMAGE",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <>
            <img
                ref={drag}
                src={src}
                // alt={text}
                width="150px"
                style={{ border: isDragging ? "5px solid pink" : "0px" }}
            />
        </>
    )
}