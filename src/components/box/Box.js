import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import "../dropzone/Dropzone.css"


export const Box = (props) => {

    const [images, setImages] = useState([])

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "IMAGE",
        drop: (item, monitor) => {
            const { x: mouseX, y: mouseY } = monitor.getClientOffset();
            const { x: boxX, y: boxY } = monitor.getSourceClientOffset();
            const offsetX = mouseX - boxX;
            const offsetY = mouseY - boxY;
            setImages(prevState => [
                ...prevState,
                { imageSrc: item.imageSrc, x: offsetX, y: offsetY }
            ])
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),
    }), [images])


    return (
        <>
            <div className="artbex-div">
                <div ref={drop} className={isOver && canDrop ? 'active-drop-target' : ''}>
                    {isOver && canDrop ? 'Drop here!' : 'Drag an image here'}
                </div>
                {/* {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.imageSrc}
                            style={{ left: image.x, top: image.y }}
                        />
                    ))} */}
            </div >
        </>
    )
}
