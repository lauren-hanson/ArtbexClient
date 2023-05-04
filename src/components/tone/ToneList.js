import { useEffect, useState } from "react"
import { getTones } from "../../managers/ToneManager"
import { Tone } from "./Tone"


export const ToneList = ({ imageUrl, id }) => {
    const [tones, setTones] = useState([])

    useEffect(() => {
        getTones().then((toneInfo) => setTones(toneInfo))
    }, [])

    return (<>
        <div className="verticalImageList left imageList">
            {/* <h2>Tones</h2> */}
            {tones.map((t) => {
                return <Tone key={t.id} tones={t.tones} id={t.id} imageUrl={t.imageUrl} />
            })}
        </div>
    </>)
}