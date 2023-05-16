import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd"
import { PictureList } from "./PictureList"
import { getImageByCategory, getImages } from "../../managers/ImageManager"

export const DragDrop = () => {

    const [board, setBoard] = useState([])
    // const [newBoard, `setNewBoard`] = useState({
    //     id: 0,
    //     imageUrl: ""
    // })

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


    const addImageToBoard = (id) => {
        console.log(`Adding image with id ${id} to board...`)
        const picture = images.filter((picture) => id === picture.id)
        
        console.log(`Found picture: ${JSON.stringify(picture)}`)
        if (picture) {
            setBoard((board) => [...board, picture[0]])
        }
    }


    return (
        <>
            <div className="Pictures">
                <PictureList formats={formats} productions={productions} audiences={audiences} tones={tones} />

            </div>
            <div className="createBox" ref={drop} key={`images--${images?.id}`}>
                {board.map((i) => {
                    return <div key={i?.id}>
                        {console.log(`Image URL: ${i?.imageUrl}`)}
                        <img
                            src={i?.imageUrl}
                        // alt="img"
                        />
                    </div>
                })}
            </div>

        </>
    )
}

