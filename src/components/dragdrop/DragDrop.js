import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd"
import { PictureList } from "./PictureList"
import { getImageByCategory, getImages } from "../../managers/ImageManager"

export const DragDrop = () => {

    const [board, setBoard] = useState([])
    const [images, setImages] = useState([])

    const [productions, setProductions] = useState([])
    const [audiences, setAudiences] = useState([])
    const [formats, setFormats] = useState([])
    const [tones, setTones] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "images",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    useEffect(() => {
        getImages().then((i) => {
            setImages(i)
        })
        getImageByCategory(1).then((production) => {
            setProductions(production)
        })
        getImageByCategory(2).then((format) => {
            setFormats(format)
        })
        getImageByCategory(3).then((tone) => {
            setTones(tone)
        })
        getImageByCategory(4).then((audience) => {
            setAudiences(audience)
        })
    }, [])


    const addImageToBoard = (id, category) => {
        const imageList = images.filter((i) => id === i.id && category === i.category);
        setBoard((board) => [...board, imageList[0]]);
    }

    return (
        <>
            <div className="Pictures">
                <PictureList formats={formats} productions={productions} audiences={audiences} tones={tones} />
            </div>
            <div className="createBox" ref={drop}>
                {board.map((t) => {
                    return <PictureList key={t?.id} formats={formats} productions={productions} audiences={audiences} tones={tones} />
                })}
            </div>
        </>
    )
}

