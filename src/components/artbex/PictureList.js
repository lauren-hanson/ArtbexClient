import React from "react";
import { useDrag } from "react-dnd"
import { ToneList } from "../tone/ToneList"
import { FormatList } from "../format/FormatList"
import { AudienceList } from "../audience/AudienceList"
import { ProductionList } from "../production/ProductionList"


export const PictureList = ({ id, tones, formats, audiences, productions }) => {

    // const [{ isDragging }, drag] = useDrag(() => ({
    //     type: "image",
    //     item: { id: item.id },
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging(),
    //     }),
    // }))

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))



    return (
        <>
            <div ref={drag} id={id} className={isDragging ? "isDragging" : ""}>
                <div className="verticalImageList left imageList" >
                    <h4>Tones</h4>
                    {tones.map((t) => {
                        return <ToneList key={t?.id} id={t?.id} image={t?.image}
                        />
                    })}
                </div>
                <div className="verticalImageList right ">
                    <h4>Audiences</h4>
                    {audiences.map((a) => {
                        return <AudienceList key={a?.id} id={a?.id} image={a?.image} />
                    })}
                </div>
                <div className="horizontalImageList top imageList">
                    <h4>Formats</h4>
                    {formats.map((f) => {
                        return <FormatList key={f?.id} id={f?.id} image={f?.image} />
                    })}
                </div>
                <div className="horizontalImageList bottom imageList">
                    <h4>Productions</h4>
                    {productions.map((p) => {
                        return <ProductionList key={p?.id} id={p?.id} image={p?.image} />
                    })}
                </div>
            </div>
        </>
    )
}
