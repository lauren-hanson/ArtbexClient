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

export const PictureList = ({ id, tones, formats, audiences, productions, key }) => {
    // const [{ isDragging }, drag] = useDrag(() => ({
    //     type: "images",
    //     item: { id: id },
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging(),
    //     }),
    // }), [])

    return (
        <>
            <div key={key}>
                <div>
                    {tones.map((t) => {
                        return <Tone tones={tones} id={t.id} category="tones" />
                    })}
                </div>
                <div>
                    {audiences.map((a) => {
                        return <Audience audiences={audiences} id={a.id} category="audiences" />
                    })}
                </div>
                <div className="horizontalImageList top imageList">
                    <h4>Formats</h4>
                    {formats.map((f) => {
                        return <Format formats={formats} id={f.id} category="formats" image={f.imageUrl} />
                    })}
                </div>
                <div className="horizontalImageList bottom imageList">
                    <h4>Productions</h4>
                    {productions.map((p) => {
                        return <Production productions={productions} id={p.id} category="productions" image={p.imageUrl} />
                    })}
                </div>
            </div>
        </>
    )
}
