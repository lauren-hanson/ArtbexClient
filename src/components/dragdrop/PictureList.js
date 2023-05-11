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

export const PictureList = ({ id, tones, formats, audiences, productions, key, handleDrop }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "images",
        item: { id: id },
        drop: (item) => handleDrop(item.id),
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }), [])

    return (
        <>
            <div key={key}>
                <div className="verticalImageList left imageList" >
                    <h4>Tones</h4>
                    {tones.map((t) => {
                        return <Tone ref={drag} tones={tones} id={t.id} category="tones" image={t.imageUrl} />
                    })}
                </div>
                <div className="verticalImageList right ">
                    <h4>Audiences</h4>
                    {audiences.map((a) => {
                        return <Audience ref={drag} audiences={audiences} id={a.id} category="audiences" image={a.imageUrl} />
                    })}
                </div>
                <div className="horizontalImageList top imageList">
                    <h4>Formats</h4>
                    {formats.map((f) => {
                        return <Format ref={drag} formats={formats} id={f.id} category="formats" image={f.imageUrl} />
                    })}
                </div>
                <div className="horizontalImageList bottom imageList">
                    <h4>Productions</h4>
                    {productions.map((p) => {
                        return <Production ref={drag} productions={productions} id={p.id} category="productions" image={p.imageUrl} />
                    })}
                </div>
            </div>
        </>
    )
}
