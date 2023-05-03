import { useEffect, useState } from "react"
import { getFormats } from "../../managers/FormatManager"
import { Format } from "./Format"

export const FormatList = () => {
    const [formats, setFormats] = useState([])

    useEffect(() => {
        getFormats().then((formatInfo) => setFormats(formatInfo))
    }, [])

    return (
        <>
            <div className="horizontalImageList top imageList">
                {/* <h2>Formats</h2> */}
                {formats.map((f) => {
                    return <Format key={f.id} formats={f.formats} id={f.id} images={f.imageUrl} type={f.type} />
                })}
            </div>
        </>
    )
}




