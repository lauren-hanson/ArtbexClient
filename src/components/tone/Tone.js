import React from "react"
import { useDrag } from "react-dnd"

export const Tone = ({ id, image }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "IMAGES",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }), [])

    return (
        <>
            <img
                className="images file-img"
                ref={drag}
                src={image}
                alt="tone"
                width="150px"
                style={{ border: isDragging ? "5px solid pink" : "0px" }}
            />
        </>
    )
}