import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { CustomCreateLayer } from './CustomCreateLayer'

// export const Create = ({ children }) => {

//     const [images, setImages] = useState([])

//     const [{ isOver, canDrop }, drop] = useDrop(() => ({
//         accept: "IMAGES",

//         drop: (item, monitor) => {
//             const delta = monitor.getDifferenceFromInitialOffset();
//             const left = Math.round(item.x + delta.x);
//             const top = Math.round(item.y + delta.y);
//             const newImage = { imageSrc: item.imageSrc, x: left, y: top };
//             setImages(prevImages => [...prevImages, newImage]);
//         },
//         collect: monitor => ({
//             isOver: !!monitor.isOver(),
//             canDrop: !!monitor.canDrop()
//         }),
//     }), [images])


//     return (
//         <>
//             <div className="createBox">
//                 <div ref={drop} className={isOver && canDrop ? 'active-drop-target' : ''}>
//                     {isOver && canDrop ? 'Drop here!' : 'Drag an image here'}
//                     {children}
//                 </div>
//                 {/* {images.map((image, index) => (
//                         <img
//                             key={index}
//                             src={image.imageUrl}
//                             style={{ left: image.x, top: image.y }}
//                         />
//                     ))} */}
//             </div >
//         </>
//     )
// }

export const Create = ({children}) => {

    const [images, setImages] = useState([])

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "IMAGES",

        drop: (item, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.x + delta.x);
            const top = Math.round(item.y + delta.y);
            const newImage = { imageSrc: item.imageSrc, x: left, y: top };
            setImages(prevImages => [...prevImages, newImage]);
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),
    }), [images])


    return (
        <>
            <div className="createBox">
                <div ref={drop} className={isOver && canDrop ? 'active-drop-target' : ''}>
                    {isOver && canDrop ? 'Drop here!' : 'Drag an image here'}
                    {children}
                </div>
                {/* {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.imageUrl}
                            style={{ left: image.x, top: image.y }}
                        />
                    ))} */}
            </div >
            <CustomCreateLayer />
        </>
    )
}