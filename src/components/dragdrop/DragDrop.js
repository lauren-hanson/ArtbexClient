import React, { useState, useEffect } from "react";
import { Picture } from "./Picture";
import { useDrop } from "react-dnd"
import { Tone } from "../tone/Tone"
import { getTones } from "../../managers/ToneManager"
import { getFormats } from "../../managers/FormatManager"
import { getAudiences } from "../../managers/AudienceManager"
import { getProductions } from "../../managers/ProductionManager"

const PictureList = [
    {
        id: 1,
        imageUrl:
            "https://res.cloudinary.com/dgwi6xvfl/image/upload/v1681062188/artbex/s9w2iceruy9yffsbklfp.jpg",
    },
    {
        id: 2,
        imageUrl:
            "https://res.cloudinary.com/dgwi6xvfl/image/upload/v1681062172/artbex/e0zu4lxehvaacuknl3p3.jpg",
    },
    {
        id: 3,
        imageUrl:
            "https://res.cloudinary.com/dgwi6xvfl/image/upload/v1681062145/artbex/huc9p9zv3bvj8vpgja16.jpg",
    },
];

export const DragDrop = () => {
    const [board, setBoard] = useState([])
    const [tones, setTones] = useState([])
    const [audiences, setAudiences] = useState([])
    const [formats, setFormats] = useState([])
    const [productions, setProductions] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    useEffect(() => {
        getTones().then((tone) => setTones(tone))
        getAudiences().then((audience) => setAudiences(audience))
        getFormats().then((format) => setFormats(format))
        getProductions().then((production) => setProductions(production))

    }, [])

    const addImageToBoard = (id) => {
        // const pictureList = PictureList.filter((picture) => id === picture.id)

        const toneList = tones.filter((t) => id === t.id)

        setBoard((board) => [...board, toneList[0]])
    }

    return (
        <>
            <div className="Pictures">
                {tones.map((t) => {
                    return <Tone imageUrl={t.imageUrl} id={t.id} />;
                })}
            </div>

            <div className="Board" ref={drop}>
                {board.map((t) => {
                    return <Tone imageUrl={t.imageUrl} id={t.id} />
                })}
            </div>
        </>
    );
}