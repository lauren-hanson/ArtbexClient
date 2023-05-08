import React from "react";
import { useDrag } from "react-dnd"
import { ToneList } from "../tone/ToneList"

export const PictureList = ({src, id, text, tones}) => {
    // const [{ isDragging }, drag] = useDrag(() => ({
    //     type: "images",
    //     item: { id: id },
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging(),
    //     }),

    // }), [id])

 

   
    return (
        <ToneList src={src} id={id} text={text} tones={tones}/>
        // <img
        //     ref={drag}
        //     src={image}
        //     width="150px"
        //     style={{ border: isDragging ? "5px solid pink" : "0px" }}
        // />
    )
}
