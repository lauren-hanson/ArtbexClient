import React from 'react'

import { useDrop } from 'react-dnd'
import "../dropzone/Dropzone.css"

export const Box = (props) => {

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "IMAGE",
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),

    }), [])


    return (
        <>
            <div className="artbex-div">
                <div ref={drop}>Drop Target</div>


            </div>
        </>
    )
}
