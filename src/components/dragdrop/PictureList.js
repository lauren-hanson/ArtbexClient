import React from "react";
import { useDrag } from "react-dnd"
// import { ToneList } from "../tone/ToneList"
// import { FormatList } from "../format/FormatList"
// import { AudienceList } from "../audience/AudienceList"
// import { ProductionList } from "../production/ProductionList"
import { Tone } from "../tone/Tone"
import { Format } from "../format/Format"
import { Audience } from "../audience/Audience"
import { Production } from "../production/Production"

export const PictureList = ({ id, tones, formats, audiences, productions }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "images",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),

    }), [])


    return (
        <>
            {/* <ToneList tones={tones} />
            <AudienceList audiences={audiences} />
            <FormatList formats={formats} />
            <ProductionList productions={productions} /> */}
            <Tone
                tones={tones} id={tones.id} />
            <Audience audiences={audiences} id={audiences.id} />
            <Format formats={formats} id={formats.id} />
            <Production productions={productions} id={productions.id} />
        </>
        // <img
        //     ref={drag}
        //     src={image}
        //     width="150px"
        //     style={{ border: isDragging ? "5px solid pink" : "0px" }}
        // />
    )
}
