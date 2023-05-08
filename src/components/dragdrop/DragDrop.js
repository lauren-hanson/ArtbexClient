import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd"
import { Tone } from "../tone/Tone"
import { ToneList } from "../tone/ToneList"
import { getTones } from "../../managers/ToneManager"

export const DragDrop = () => {

    const [board, setBoard] = useState([])

    const [tones, setTones] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "IMAGES",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    useEffect(() => {
        getTones().then((tone) => {
            setTones(tone)
        })

    }, [])


    const addImageToBoard = (id) => {
        const toneList = tones.filter((t) => id === t.id)
        setBoard((board) => [...board, toneList[0]])
    }

    return (
        <>
            <div className="Pictures">
                {tones.map((t) => {
                    return <Tone src={t?.imageUrl} id={t?.id} text={t?.type} />;
                })}
            </div>
            <div className="createBox" ref={drop}>
                {board.map((t) => {
                    return <Tone src={t?.imageUrl} id={t?.id} text={t?.type} />
                })}
            </div>
        </>
    );
}

