// import { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// export const DragDrop = ({ images }) => {

//     // array of images being created for the form
//     const [selectedImages, setSelectedImages] = useState([])

//     const handleImageDragStart = (event, imageId) => {
//         event.dataTransfer.setData("imageId", imageId);
//     }

//     const handleImageDragOver = (event) => {
//         event.preventDefault();
//     }

//     const handleImageDrop = (event) => {
//         event.preventDefault();
//         const imageId = event.dataTransfer.getData("imageId");
//         const parsedImageId = parseInt(imageId, 10);

//         // Check if the image is not already in the selectedImages array
//         if (!selectedImages.includes(parsedImageId)) {
//             setSelectedImages([...selectedImages, parsedImageId]);
//         }

//     }

//     const handleOnDragEnd = (result) => {
//         if (!result.destination) return;
//         // creating a new array 
//         const newOrder = Array.from(selectedImages)
//         const [reorderImages] = newOrder.splice(result.source.index, 1)
//         newOrder.splice(result.destination.index, 0, reorderImages)

//         setSelectedImages(newOrder)
//     }


//     return (<>
//         <ul>
//             {images.map((image) => (

//                 <div
//                     className="images"
//                     key={`image--${image?.id}`}
//                     draggable="true" // Add draggable attribute]
//                     onDragStart={(event) => handleImageDragStart(event, image.id)} // Handle the drag start event
//                 >
//                     <img
//                         src={image?.image}
//                         alt="img"
//                         className="imageLabel"
//                     />
//                 </div>

//             ))}
//         </ul>

//         <DragDropContext onDragEnd={handleOnDragEnd}>
//             <Droppable
//                 droppableId='images'

//             >
//                 {(provided) => (
//                     <div
//                         className='createBox'
//                         onDragOver={handleImageDragOver}
//                         onDrop={handleImageDrop}
//                         {...provided.droppableProps}
//                         ref={provided.innerRef}>
//                         <ul>
//                             {
//                                 selectedImages.map((selectedImageId, index) => {
//                                     const selectedImage = images.find((image) => image.id === selectedImageId);
//                                     if (selectedImage) {
//                                         return (
//                                             <Draggable
//                                                 key={`selectedImage--${selectedImage.id}`}
//                                                 draggableId={selectedImageId.toString()}
//                                                 index={index}
//                                             >
//                                                 {(provided) => (
//                                                     <div
//                                                         ref={provided.innerRef}
//                                                         {...provided.draggableProps}
//                                                         {...provided.dragHandleProps}
//                                                     >
//                                                         <img
//                                                             className="placedImage"
//                                                             src={selectedImage?.image}
//                                                             alt="img"
//                                                         />
//                                                     </div>
//                                                 )}
//                                             </Draggable>
//                                         );
//                                     }
//                                     return null;
//                                 })}
//                             {provided.placeholder}
//                         </ul>
//                     </div>
//                 )}
//             </Droppable>
//         </DragDropContext>

//     </>)

// }