import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd"
import { PictureList } from "./PictureList"
import { addNewArtBex } from "../../managers/ArtbexManager"
import { getImageByCategory, getImages } from "../../managers/ImageManager"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { DragDrop } from "./DragDrop";

export const CreateArtBex = () => {

    const [newArtBex, setNewArtBex] = useState([{
        startDate: "",
        endDate: "",
        notes: "",
        images: []
    }])

    const [images, setImages] = useState([])
    const [selectedImages, setSelectedImages] = useState([])
    // const [updateImages, setUpdate] = useState(selectedImages)

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


    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }


    const handleImageDragStart = (event, imageId) => {
        event.dataTransfer.setData("imageId", imageId);
    }

    const handleImageDragOver = (event) => {
        event.preventDefault();
    }

    const handleImageDrop = (event) => {
        event.preventDefault();
        const imageId = event.dataTransfer.getData("imageId");
        const parsedImageId = parseInt(imageId, 10);

        // Check if the image is not already in the selectedImages array
        if (!selectedImages.includes(parsedImageId)) {
            setSelectedImages([...selectedImages, parsedImageId]);
        }

    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        // creating a new array 
        const newOrder = Array.from(selectedImages)
        const [reorderImages] = newOrder.splice(result.source.index, 1)
        newOrder.splice(result.destination.index, 0, reorderImages)

        setSelectedImages(newOrder)
    }


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

                        <ul>
                            {images.map((image) => (

                                <div
                                    className="images"
                                    key={`image--${image?.id}`}
                                    draggable="true" // Add draggable attribute]
                                    onDragStart={(event) => handleImageDragStart(event, image.id)} // Handle the drag start event
                                >
                                    <img
                                        src={image?.image}
                                        alt="img"
                                        className="imageLabel"
                                    />
                                </div>

                            ))}
                        </ul>

                        <DragDropContext
                            onDragEnd={handleOnDragEnd}
                        >
                            <Droppable
                                ignoreContainerClipping={true}
                                droppableId='images'

                            >
                                {(provided) => (
                                    <div
                                        className='createBox'
                                        onDragOver={handleImageDragOver}
                                        onDrop={handleImageDrop}
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}>

                                        <ul className='createBoxImage'>
                                            {
                                                selectedImages.map((selectedImageId, index) => {
                                                    const selectedImage = images.find((image) => image.id === selectedImageId);
                                                    if (selectedImage) {
                                                        return (
                                                            <Draggable
                                                                key={`selectedImage--${selectedImage.id}`}
                                                                draggableId={selectedImage.id.toString()}
                                                                index={index}
                                                            >
                                                                {(provided) => (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                    >

                                                                        <img
                                                                            className="placedImage"
                                                                            src={selectedImage?.image}
                                                                            alt="img"
                                                                        />
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                            {provided.placeholder}
                                        </ul>
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>


                        {/* <ul>
                            {images.map((image) => (
                                <li>
                                    <div
                                        className="images"
                                        key={`image--${image?.id}`}
                                        draggable="true" // Add draggable attribute]
                                        onDragStart={(event) => handleImageDragStart(event, image.id)} // Handle the drag start event
                                    >
                                        <img
                                            src={image?.image}
                                            alt="img"
                                            className="imageLabel"
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="createBox" onDragOver={handleImageDragOver} onDrop={handleImageDrop}>
                            {selectedImages.map((selectedImageId) => {
                                const selectedImage = images.find((image) => image.id === selectedImageId);
                                if (selectedImage) {
                                    return (
                                        <div
                                            key={`selectedImage--${selectedImage.id}`}>
                                            <img
                                                className="placedImage"
                                                src={selectedImage?.image}
                                                alt="img"
                                            />
                                        </div>
                                    );
                                }
                                return null; // Handle the case where the selectedImage is not found in the images array.
                            })}

                        </div> */}



                        {/* <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId='images'>
                                {(provided) => (
                                    <ul
                                        className="createBox"
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}>
                                        {selectedImages.map(({ image, id }, index) => {
                                            return (
                                                <Draggable
                                                    key={id}
                                                    draggableId='image'
                                                    index={index}>
                                                    {(provided) => (
                                                        <li
                                                            {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                                                            <div>
                                                                <img
                                                                    className="placedImage"
                                                                    src={image}
                                                                    alt="img"
                                                                />
                                                            </div>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            )

                                        })}
                                        {provided.placeholder}
                                    </ul>
                                )}

                            </Droppable>
                        </DragDropContext> */}


                        {/* <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId='images'>
                                {(provided) => (
                                    <ul
                                        className="images"
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}>
                                        {images.map((image, index) => {
                                            return (
                                                <Draggable
                                                    className="createBox"
                                                    draggableId='image'
                                                    index={index}>
                                                    {(provided) => (
                                                        <li
                                                            {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                                                            <div>
                                                                <img
                                                                    src={image.image}
                                                                    alt="img"
                                                                    className="imageLabel"
                                                                />
                                                            </div>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            )

                                        })}
                                        {provided.placeholder}
                                    </ul>
                                )}

                            </Droppable>
                        </DragDropContext> */}


                        {/* <ul>
                            {updateImages.map((image) => (
                                <li>
                                    <div
                                        className="images"
                                        key={`image--${image?.id}`}
                                        draggable="true" // Add draggable attribute]
                                        onDragStart={(event) => handleImageDragStart(event, image.id)} // Handle the drag start event
                                    >
                                        <img
                                            src={image?.image}
                                            alt="img"
                                            className="imageLabel"
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul> */}


                        {/* <ul>
                            {images.map((image) => (
                                <li>
                                    <div
                                        className="images"
                                        key={`image--${image?.id}`}
                                        draggable="true" // Add draggable attribute]
                                        onDragStart={(event) => handleImageDragStart(event, image.id)} // Handle the drag start event
                                    >
                                        <img
                                            src={image?.image}
                                            alt="img"
                                            className="imageLabel"
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul> */}


                    </div>

                </fieldset >
                <button
                    type="publish"
                    className="publishArtBexButton"
                    onClick={evt => {
                        evt.preventDefault()
                        publishNewArtBex()
                    }}>
                    Submit
                </button>
            </form >

        </>
    )
}

