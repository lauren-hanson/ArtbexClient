import React from "react"
import { useDrag } from "react-dnd"

export const Tone = ({ id, tones }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "images",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }), [])

    return (
        // <>
        //     <img
        //         className="images file-img"
        //         ref={drag}
        //         src={tones.imageUrl}
        //         alt="tone"
        //         width="150px"
        //         style={{ border: isDragging ? "5px solid pink" : "0px" }}
        //     />
        // </>
        // <>

        <div className="verticalImageList left imageList" >
            <h4>Tones</h4>
            {tones.map((t) => {
                return <img
                        key={t.id}
                        className="images file-img"
                        ref={drag}
                        src={t.imageUrl}
                        alt="Tone Image"
                        width="150px"
                        style={{ border: isDragging ? "5px solid pink" : "0px" }}
                    />
                // <Tone key={t?.id} id={t?.id} src={t?.imageUrl} />
            })}
        </div>

    )
}