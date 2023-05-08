import { useEffect, useState } from "react"
import { Tone } from "./Tone"

export const ToneList = ({ src, id, text, tones }) => {

    return (<>

        <div className="Pictures verticalImageList left imageList">
            {/* {tones.map(() => {
                return <Tone src={src} id={id} text={text} />
            })} */}
            {tones && tones.map(tone => <Tone {...tone} />)}
        </div>
    </>)
}