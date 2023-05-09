import React from "react";
import { useDrag } from "react-dnd"
import { ToneList } from "../tone/ToneList"
import { FormatList } from "../format/FormatList"
import { AudienceList } from "../audience/AudienceList"
import { ProductionList } from "../production/ProductionList"

export const PictureList = ({ src, id, text, tones, formats, audiences, productions }) => {
    // const [{ isDragging }, drag] = useDrag(() => ({
    //     type: "images",
    //     item: { id: id },
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging(),
    //     }),

    // }), [id])




    return (
        <>
            <ToneList tones={tones} />
            <AudienceList audiences={audiences} />
            <FormatList formats={formats} />
            <ProductionList productions={productions} />
        </>
        // <img
        //     ref={drag}
        //     src={image}
        //     width="150px"
        //     style={{ border: isDragging ? "5px solid pink" : "0px" }}
        // />
    )
}
