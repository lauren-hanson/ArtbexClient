import { useEffect, useState } from "react"
import { Format } from "./Format"

export const FormatList = ({ formats }) => {

    return (
        <>
            <div className="horizontalImageList top imageList">
                <h4>Formats</h4>
                {formats.map((f) => {
                    return <Format key={f.id} formats={f.formats} id={f.id} image={f.imageUrl} type={f.type} />
                })}
            </div>
        </>
    )
}




