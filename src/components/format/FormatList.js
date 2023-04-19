import { useEffect, useState } from "react"
import { useDrag } from 'react-dnd'
import { getFormats } from "../../managers/FormatManager"


export const FormatList = () => {
    const [formats, setFormats] = useState([])


    useEffect(() => {
        getFormats().then((formatInfo) => setFormats(formatInfo))
    }, [])

    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: ItemTypes.CARD,
            item: { imageURL },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            })
        }),
        []
    )


    return (<>
        <h2>Formats</h2>
        <div ref={dragRef} style={{ opacity }}>
            {formats.map((format) => {
                return <img src={format.imageUrl} />
            })}
        </div>
    </>)
}

