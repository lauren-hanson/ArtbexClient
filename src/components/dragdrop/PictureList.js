import React, { useState, useEffect } from "react";
import { useDrag } from "react-dnd"
import { Tone } from "../tone/Tone"
import { Format } from "../format/Format"
import { Audience } from "../audience/Audience"
import { Production } from "../production/Production"


export const PictureList = ({ id, key, tones, formats, audiences, productions }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "images",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <>
            <div key={key} ref={drag}>
                <div className="verticalImageList left imageList" >
                    <h4>Tones</h4>
                    {tones.map((t) => {
                        return <Tone key={t?.id} id={t?.id} image={t?.imageUrl}
                        />
                    })}
                </div>
                <div className="verticalImageList right ">
                    <h4>Audiences</h4>
                    {audiences.map((a) => {
                        return <Audience key={a?.id} id={a?.id} image={a?.imageUrl} />
                    })}
                </div>
                <div className="horizontalImageList top imageList">
                    <h4>Formats</h4>
                    {formats.map((f) => {
                        return <Format key={f?.id} id={f?.id} image={f?.imageUrl} />
                    })}
                </div>
                <div className="horizontalImageList bottom imageList">
                    <h4>Productions</h4>
                    {productions.map((p) => {
                        return <Production key={p?.id} id={p?.id} image={p?.imageUrl} />
                    })}
                </div>
            </div>
        </>
    )
}
