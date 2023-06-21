import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd"
import { PictureList } from "./PictureList"
import { addNewArtBex } from "../../managers/ArtbexManager"
import { getImageByCategory, getImages } from "../../managers/ImageManager"

export const CreateArtBex = () => {

    // const [board, setBoard] = useState([])

    const [newArtBex, setNewArtBex] = useState([{
        startDate: "",
        endDate: "",
        notes: "",
        images: []
    }])

    const [images, setImages] = useState([])
    const [selectedImages, setSelectedImages] = useState([])

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


    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: "image",
    //     drop: (item) => {
    //         addImageToBoard(item.id)
    //         console.log(item)
    //     },
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //     }),
    // }))

    const handleNewArtBex = (event) => {
        const artBex = Object.assign({}, newArtBex)
        artBex[event.target.name] = event.target.value
        setNewArtBex(artBex)
    }


    const publishNewArtBex = () => {

        const creation = {
            startDate: newArtBex.startDate,
            endDate: newArtBex.endDate,
            notes: newArtBex.notes,
            images: selectedImages
        }

        addNewArtBex(creation)
            .then((res) => res.json())
            .then((res) => {
                let APIImages = selectedImages.map(image => {
                    return {
                        image_id: image,
                        artbex_id: res.id
                    }
                })
                Promise.all(APIImages.map(image => {
                    imagePromise(image)
                }))
                    .then(response => {
                        alert('ArtBex created!')
                    })
            })
    }


    // const addImageToBoard = (id) => {
    //         const picture = images.find((image) => id === image.id)

    //         if (picture) {
    //             setNewArtBex((newArtBex) => [...newArtBex, picture])
    //         }
    //     }


    return (
        <>
            <form
                className="artBexForm"
                onSubmit={publishNewArtBex}>
                <div className="dateContainer">
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
                </div>
                <fieldset>
                    <h3>Notes:</h3>
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
                    <div className="form-group imageGroup">
                        {images.map(image => (
                            <div className="images">
                                <input
                                    name="imageId"
                                    type="checkbox"
                                    className="form-control"
                                    placeholder="image"
                                    value={image.id}
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            let copy = [...selectedImages]
                                            copy.push(parseInt(event.target.value))
                                            setSelectedImages(copy)
                                        } else {
                                            let copy = [...selectedImages]
                                            let index = copy.indexOf(parseInt(event.target.value))
                                            copy.splice(index)
                                            setSelectedImages(copy)
                                        }
                                    }}
                                />
                                <label className="imageLabel">
                                    <option
                                        key={`image--${image?.id}`}
                                        value={image?.id}
                                    >
                                        {image?.type}
                                    </option>
                                </label>
                            </div>
                        ))}
                    </div>
                </fieldset>
                {/* <div>
                        <div className="Pictures">
                            <PictureList
                                // onChange={handleNewArtBex}
                                onChange={(event) => {
                                    const copy = { ...newArtBex }
                                    copy.pictureId = parseInt(event.target.value)
                                    setNewArtBex(copy)
                                }}
                                name="image"
                                value={images.id}
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

                    </div> */}

                <button
                    type="publish"
                    className="publishArtBexButton"
                    onClick={evt => {
                        evt.preventDefault()
                        publishNewArtBex()
                    }}>
                    Submit
                </button>
            </form>

        </>
    )
}

