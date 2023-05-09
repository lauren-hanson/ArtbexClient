import React from "react";
import { useDrag } from "react-dnd";

export const Audience = ({ id, audiences }) => {
    
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "images",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }), [])

    return (
        <div className="verticalImageList right imageList">
            <h4>Audiences</h4>
            {audiences.map((a) => {
                return <img
                    className="images file-img"
                    ref={drag}
                    key={a.id}
                    src={a.imageUrl}
                    alt="Audience Image"
                    width="150px"
                    style={{ border: isDragging ? "5px solid pink" : "0px" }}
                />
            })}
        </div>
    )
}