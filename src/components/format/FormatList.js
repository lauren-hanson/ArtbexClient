import { useEffect, useState } from "react"
import { getFormats } from "../../managers/FormatManager"
// import { useDrag } from "react-dnd";
import { Format } from "./Format"



export const FormatList = () => {
    const [formats, setFormats] = useState([])

    useEffect(() => {
        getFormats().then((formatInfo) => setFormats(formatInfo))
    }, [])

    // const [{ isDragging }, drag] = useDrag({
    //     item: { type: "IMAGE", formats },
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging(),
    //     }),
    // });

    return (
        <>
            {formats.map((f) => {
                return <Format key={f.id} formats={f.formats} id={f.id} images={f.imageUrl} />
                // return (
                //     <div
                //         // ref={drag}
                //         // style={{
                //         //     opacity: isDragging ? 0.5 : 1,
                //         //     cursor: "move",
                //         // }}
                //     >
                //         <img src={f.imageUrl} className="images file-img" />
                //     </div>
                // );
            })}
        </>
    )
}




