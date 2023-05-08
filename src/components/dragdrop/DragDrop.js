import React, { useState, useEffect } from "react"
import { useDrop } from "react-dnd"

import { PictureList } from "./PictureList"
import { getTones } from "../../managers/ToneManager"


export const DragDrop = () => {

    const [board, setBoard] = useState([])

    const [tones, setTones] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "images",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addImageToBoard = (id) => {
        const pictureList = tones.filter((picture) => id === picture.id)
        setBoard((board) => [...board, pictureList[0]])

        // const toneList = tones.find((t) => id === t.id)
        // setBoard((board) => [...board, toneList])
    }


    useEffect(() => {
        getTones().then((tone) => {
            setTones(tone)
        })

    }, [])

    return (
        <>
            {/* <div className="Pictures">
                {tones.map((t) => {
                    return <PictureList src={t?.imageUrl} id={t?.id} text={t?.type} />
                })}
            </div> */}
            <div className="Pictures">
                <PictureList tones={tones}/>
            </div>
            <div className="createBox" ref={drop}>
                {board.map((t) => {
                    return <PictureList src={t?.imageUrl} id={t?.id}/>
                })}
            </div>
        </>
    );
}

// src={t?.imageUrl} id={t?.id} text={t?.type}
