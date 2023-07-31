import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd"
import { PictureList } from "./PictureList"
import { addNewArtBex } from "../../managers/ArtbexManager"
import { getImageByCategory, getImages } from "../../managers/ImageManager"

export const CreateArtBex = () => {

    const [newArtBex, setNewArtBex] = useState([{
        startDate: "",
        endDate: "",
        notes: "",
        images: []
    }])

    const [images, setImages] = useState([])
    const [selectedImages, setSelectedImages] = useState([])

    // const [productions, setProductions] = useState([])
    // const [audiences, setAudiences] = useState([])
    // const [formats, setFormats] = useState([])
    // const [tones, setTones] = useState([])

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
        // getImageByCategory(1).then((production) => {
        //     setProductions(production)
        // })
        // getImageByCategory(2).then((format) => {
        //     setFormats(format)
        // })
        // getImageByCategory(3).then((tone) => {
        //     setTones(tone)
        // })
        // getImageByCategory(4).then((audience) => {
        //     setAudiences(audience)
        // })
    }, [])

    const handleImageClick = (event, imageId) => {
        event.preventDefault();
        const parsedImageId = parseInt(imageId, 10);

        if (!selectedImages.includes(parsedImageId)) {
            setSelectedImages([...selectedImages, parsedImageId]);
        } else {
            setSelectedImages(selectedImages.filter((id) => id !== parsedImageId));
        }
    };



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
                        {images.map((image) => (
                            <div
                                className="images"
                                key={`image--${image?.id}`}
                            >
                                <label>
                                    <img
                                        src={image?.image}
                                        alt="img"
                                        className="imageLabel"
                                        onClick={(event) => handleImageClick(event, image.id)} />
                                </label>
                            </div>
                        ))}
                        <div className="createBox">
                            {selectedImages.map((selectedImageId) => {
                                const selectedImage = images.find((image) => image.id === selectedImageId);
                                if (selectedImage) {
                                    return (
                                        <div key={`selectedImage--${selectedImage.id}`}>
                                            <img
                                                src={selectedImage.image}
                                                alt="img"
                                            />
                                        </div>
                                    );
                                }
                                return null; // Handle the case where the selectedImage is not found in the images array.
                            })}
                        </div>
                    </div>

                </fieldset>
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

