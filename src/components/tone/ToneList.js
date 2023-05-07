import { useEffect, useState } from "react"
import { getTones } from "../../managers/ToneManager"
import { Tone } from "./Tone"


export const ToneList = ({ image, id, tones }) => {
    // const [tones, setTones] = useState([])

    // useEffect(() => {
    //     getTones().then((toneInfo) => setTones(toneInfo))
    // }, [])

    return (<>
        <h4>Tones</h4>
        <div className="verticalImageList left imageList">
            {/* <h2>Tones</h2> */}
            {/* {tones.map((t) => { */}
            <Tone key={id} tones={tones} id={id} image={image} />
            {/* })} */}
        </div>
    </>)
}