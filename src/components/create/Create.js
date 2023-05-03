import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'

export const Create = (props) => {

    const [images, setImages] = useState([])

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "IMAGE",

        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),
        drop: (item, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.x + delta.x);
            const top = Math.round(item.y + delta.y);
            const newImage = { imageSrc: item.imageSrc, x: left, y: top };
            setImages(prevImages => [...prevImages, newImage]);
        }
    }), [images])


    return (
        <>
            <div className="createBox">
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
