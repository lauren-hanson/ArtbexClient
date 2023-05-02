import { useEffect, useState } from "react"
import { getTones } from "../../managers/ToneManager"
import { Tone } from "./Tone"


export const ToneList = () => {
    const [tones, setTones] = useState([])


    useEffect(() => {
        getTones().then((toneInfo) => setTones(toneInfo))
    }, [])

    return (<>
        <h2>Tones</h2>
        <div className="imageList">
            {tones.map((t) => {
                return <Tone key={t.id} tones={t.tones} id={t.id} images={t.imageUrl} type={t.type}/>
            })}
        </div>
    </>)
}