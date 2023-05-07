import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd"
import { Tone } from "../tone/Tone"
import { getTones } from "../../managers/ToneManager"
// import { Audience } from "../audience/Audience"
// import { getAudiences } from "../../managers/AudienceManager"
// import { Picture } from "./Picture";
// import { getFormats } from "../../managers/FormatManager"
// import { getProductions } from "../../managers/ProductionManager"

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
]

export const DragDrop = () => {
    const [board, setBoard] = useState([
        {
            id: 0,
            imageUrl: ""
        }
    ])
    const [tones, setTones] = useState([])
    // const [audiences, setAudiences] = useState([])
    // const [formats, setFormats] = useState([])
    // const [productions, setProductions] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "images",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    useEffect(() => {
        getTones().then((tone) => {
            setTones(tone)
            // getAudiences().then((audience) => setAudiences(audience))
            // getFormats().then((format) => setFormats(format))
            // getProductions().then((production) => setProductions(production))

        })
    }, [])

    const addImageToBoard = (id) => {
        // const pictureList = PictureList.filter((picture) => id === picture.id)
        // setBoard((board) => [...board, pictureList[0]])

        const toneList = tones.find((t) => id === t.id)
        // const audienceList = audiences.find((a) => id === a.id)
        setBoard((board) => [...board, toneList])

    }

    return (
        <>
            <div className="Pictures">
                {tones.map((p) => {
                    return <Tone image={p?.imageUrl} id={p?.id} type={p.type} />;
                })}
                {/* {audiences.map((a) => {
                    return <Audience image={a.imageUrl} id={a.id} type={a.type} />;
                })} */}
            </div>
            <div className="createBox" ref={drop}>
                {board.map((t) => {
                    return <Tone image={t?.imageUrl} id={t?.id} type={t?.type} tones={t?.tones} />

                    {/* <div>
                            <Audience image={t?.imageUrl} id={t?.id} type={t?.type} tones={t?.tones} />
                        </div> */}
                })}
            </div>
        </>
    );
}

