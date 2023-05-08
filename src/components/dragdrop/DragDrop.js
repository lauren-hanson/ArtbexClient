import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd"
import { Tone } from "../tone/Tone"
import { getTones } from "../../managers/ToneManager"


// const PictureList = [
//     {
//         id: 1,
//         imageUrl:
//             "https://res.cloudinary.com/dgwi6xvfl/image/upload/v1681062188/artbex/s9w2iceruy9yffsbklfp.jpg",
//     },
//     {
//         id: 2,
//         imageUrl:
//             "https://res.cloudinary.com/dgwi6xvfl/image/upload/v1681062172/artbex/e0zu4lxehvaacuknl3p3.jpg",
//     },
//     {
//         id: 3,
//         imageUrl:
//             "https://res.cloudinary.com/dgwi6xvfl/image/upload/v1681062145/artbex/huc9p9zv3bvj8vpgja16.jpg",
//     },
// ]

export const DragDrop = () => {
    const [board, setBoard] = useState([
        {
            id: 0,
            imageUrl: ""
        }
    ])

    const [tones, setTones] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "IMAGE",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    useEffect(() => {
        getTones().then((tone) => {
            setTones(tone)
        })
    }, [])

    const addImageToBoard = (id) => {
        // const pictureList = PictureList.filter((picture) => id === picture.id)
        // setBoard((board) => [...board, pictureList[0]])

        const toneList = tones.filter((t) => id === t.id)
        setBoard((board) => [...board, toneList[0]])
    }

    return (
        <>
            <div className="Pictures">
                {tones.map((t) => {
                    return <Tone src={t?.imageUrl} id={t?.id} text={t?.type} />
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

