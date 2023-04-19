import { useEffect, useState } from "react"
import { getTones } from "../../managers/ToneManager"


export const ToneList = () => {
    const [tones, setTones] = useState([])


    useEffect(() => {
        getTones().then((toneInfo) => setTones(toneInfo))
    }, [])

    return (<>
        <h2>Tones</h2>
        <div>
            {tones.map((tone) => {
                return <img src={tone.imageUrl} />
            })}
        </div>
    </>)
}