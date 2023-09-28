// import { useRef, useState, useEffect } from "react";
// import { getImageByCategory, getImages } from "../../managers/ImageManager"

// const images = [
//     {
//         id: 1,
//         type: 'iPhone',
//         image: 'https://res.cloudinary.com/dgwi6xvfl/image/upload/v1681061920/artbex/qozxbde2yexfhpngag7l.jpg'

//     },
//     {
//         id: 2,
//         type: 'DSLR',
//         image: ' https://res.cloudinary.com/dgwi6xvfl/image/upload/v1681061946/artbex/kbas0tzrmopsx0o0yqyt.jpg'
//     },
//     {
//         id: 3,
//         type: 'Video Camera',
//         image: 'https://res.cloudinary.com/dgwi6xvfl/image/upload/v1681061971/artbex/adjtptewseqalntlfja1.jpg'
//     },
//     {
//         id: 4,
//         type: 'Director',
//         image: 'https://res.cloudinary.com/dgwi6xvfl/image/upload/v1681061985/artbex/jyae7bxvsficpresku5l.jpg'
//     }
// ]

// const pieces = [...images].map((piece) => ({
//     color: piece.color,
//     position: [Math.random() * 300, Math.random() * 300 + 300],
//     radius: piece.radius
// }));

// export const DragDrop = () => {
//     const selected = useRef();
//     const [images, setImages] = useState([])
//     const [selectedImages, setSelectedImages] = useState([])

//     useEffect(() => {
//         getImages().then((i) => {
//             setImages(i)
//             setSelectedImages(i)
//         })



//     }, [])


//     const handleMouseDown = (event, index) => {
//         const target = event.target;
//         target.style.zIndex = 1; // Set a higher z-index to bring the element to the top
//         selected.current = { index, element: target };
//         document.addEventListener("mousemove", handleMouseMove);
//     };

//     const handleMouseMove = (event) => {
//         const { element, index } = selected.current;

//         const positionX = event.pageX - element.offsetWidth / 2;
//         const positionY = event.pageY - element.offsetHeight / 2;

//         const targetX = images[index].position[0];
//         const targetY = images[index].position[1];

//         const differenceX = Math.abs(positionX - targetX);
//         const differenceY = Math.abs(positionY - targetY);

//         if (differenceX < 16 && differenceY < 16) {
//             const transform = `translate3d(${targetX - element.offsetWidth / 4}px, ${targetY - element.offsetHeight / 4
//                 }px, 0)`;
//             const transition = `transform 100ms linear`;
//             element.style.transform = transform;
//             element.style.transition = transition;
//             element.style.opacity = 0.5;
//             endDrag();
//         } else {
//             const transform = `translate3d(${positionX}px, ${positionY}px, 0)`;
//             element.style.transform = transform;
//         }
//     };

//     const handleMouseUp = () => {
//         endDrag();
//     };

//     const endDrag = () => {
//         const { element } = selected.current;
//         element.style.zIndex = "auto"; // Reset the z-index to its original value
//         // selected.current = null;
//         document.removeEventListener("mousemove", handleMouseMove);
//     };

//     return (
//         <div className="App">
//             <ul>
//                 {images.map((image, index) => (

//                     <div
//                         className="images"
//                         key={index}
//                     >
//                         <img
//                             src={image?.image}
//                             alt="img"
//                             className="imageLabel"
//                         />
//                     </div>

//                 ))}
//             </ul>

//             {images.map((image, index) => (
//                 <div
//                     key={index}
//                     onMouseDown={(event) => handleMouseDown(event, index)}
//                     onMouseUp={handleMouseUp}
//                     style={{
//                         // backgroundColor: piece.color,
//                         // borderRadius: piece.radius + "%",
//                         width: "64px",
//                         height: "64px",
//                         position: "absolute",
//                         // transform: `translate3d(${piece.position[0]}px, ${piece.position[1]}px, 0)`
//                     }}
//                 >
//                     <img
//                         src={image?.image}
//                         alt="img"
//                         className="imageLabel"
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// }
