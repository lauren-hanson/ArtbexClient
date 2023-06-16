import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd"
import { PictureList } from "./PictureList"
import { addNewArtBex } from "../../managers/ArtbexManager"
import { getImageByCategory, getImages } from "../../managers/ImageManager"

export const DragDrop = () => {

    const [board, setBoard] = useState([])

    const [newArtBex, setNewArtBex] = useState({
    })

    const [images, setImages] = useState([])
    const [imagesToSend, setImagesToSend] = useState([])

    const [productions, setProductions] = useState([])
    const [audiences, setAudiences] = useState([])
    const [formats, setFormats] = useState([])
    const [tones, setTones] = useState([])

    const imagePromise = (body) => {
        return fetch(`http://localhost:8000/artbeximages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
    }

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


    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => {
            addImageToBoard(item.id)
            console.log(item)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const handleNewArtBex = (event) => {
        const artBex = Object.assign({}, newArtBex)
        artBex[event.target.name] = event.target.value
        setNewArtBex(artBex)
    }

    const publishNewArtBex = () => {

        addNewArtBex({
            startDate: newArtBex.startDate,
            endDate: newArtBex.endDate,
            notes: newArtBex.notes,
            images: imagesToSend
        })
            .then((res) => res.json())
            .then((res) => {
                let APIImages = imagesToSend.map(image => {
                    return {
                        image_id: image,
                        artbex_id: res.id
                    }
                })
                Promise.all(APIImages.map(image => {
                    imagePromise(image)
                }))
            })
    }


    const addImageToBoard = (id) => {
        const picture = images.find((image) => id === image.id)

        if (picture) {
            setNewArtBex((newArtBex) => [...newArtBex, picture])
        }
    }


    return (
        <>
            <form>
                <fieldset>
                    <h3>Start Date:</h3>
                    <div className="form-group">
                        <input
                            type="date"
                            name="startDate"
                            required autoFocus
                            className="title-form-control"
                            placeholder="startDate"
                            onChange={handleNewArtBex} />
                    </div>
                </fieldset>
                <fieldset>
                    <h3>End Date:</h3>
                    <div className="form-group">
                        <input
                            type="date"
                            name="endDate"
                            required autoFocus
                            className="title-form-control"
                            placeholder="endDate"
                            onChange={handleNewArtBex} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <textarea
                            type="textbox"
                            rows="10" cols="75" name="notes"
                            required autoFocus
                            className="title-form-control"
                            onChange={handleNewArtBex} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group tagGroup">
                        <div className="Pictures">
                            <PictureList
                                onChange={handleNewArtBex}
                                id={board.length + 1}
                                formats={formats}
                                productions={productions}
                                audiences={audiences}
                                tones={tones} />

                        </div>
                        <div className="createBox" ref={drop} key={`images--${images?.id}`}>
                            {board.map((i) => (
                                <div key={`i--${i?.id}`}>
                                    <img
                                        src={i?.image}
                                        alt="img" />
                                </div>
                            ))}
                        </div>
                        {/* {images.map(image => (
                            <div className="images">
                                <input
                                    name="image"
                                    type="image"
                                    required autoFocus
                                    className="form-control"
                                    placeholder="image"
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            let copy = [...imagesToSend]
                                            copy.push(parseInt(event.target.value))
                                            setImagesToSend(copy)
                                        } else {
                                            let copy = [...imagesToSend]
                                            let index = copy.indexOf(parseInt(event.target.value))
                                            copy.splice(index)
                                            setImagesToSend(copy)
                                        }
                                    }}
                                />

                                    <img
                                        src={image?.image} />
                            </div>
                        ))} */}

                    </div>
                </fieldset>
                {/* <div className="Pictures">
                    <PictureList
                        id={board.length + 1}
                        formats={formats}
                        productions={productions}
                        audiences={audiences}
                        tones={tones} />

                </div> */}
                {/* <div className="createBox" ref={drop} key={`images--${images?.id}`}>
                    {board.map((i) => (
                        <div key={`i--${i?.id}`}>
                            <img
                                src={i?.image}
                                alt="img" />
                        </div>
                    ))}
                </div> */}
                <button type="publish" className="publishArtBexButton"
                    onClick={evt => {
                        evt.preventDefault()
                        publishNewArtBex()
                    }}
                >
                    Submit
                </button>
            </form>

        </>
    )
}

