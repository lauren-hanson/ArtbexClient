import React from 'react'
import { useDrag } from 'react-dnd'
import FormatList from "./FormatList"
import { getFormats } from "../../managers/FormatManager"


export const FormatDnd = () => {

    const [formats, setFormats] = useState([])


    useEffect(() => {
        getFormats().then((formatInfo) => setFormats(formatInfo))
    }, [])

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        formats: imageUrl,
        collect: monitor => ({
            isDragging: monitor.isDragging()
            // && monitor.getItem().type === ItemTypes.KNIGHT
        }),
    }), [])

    return (
        <div
            ref={drag}
            connect={preview}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 50,
                fontWeight: 'bold',
                cursor: 'move'
            }}

        >
            <FormatList />
        </div>
    )
}


