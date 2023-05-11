import React from "react"
import { useDrag } from "react-dnd"

export const Tone = ({ id, tones, image }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "images",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }), [])

    return (
        <img
            key={id}
            className="images file-img"
            ref={drag}
            src={image}
            alt="Tone Image"
            width="150px"
            style={{ border: isDragging ? "5px solid pink" : "0px" }}
        />
    )
}