import { useEffect, useState } from "react"
import { useDrag } from 'react-dnd'
import { getFormats } from "../../managers/FormatManager"



export const FormatList = () => {
    const [formats, setFormats] = useState([])


    useEffect(() => {
        getFormats().then((formatInfo) => setFormats(formatInfo))
    }, [])

    return (<>
         {formats.map((format) => {
            return <img src={format.imageUrl} className="images file-img"/>
        })}
    </>)
}




