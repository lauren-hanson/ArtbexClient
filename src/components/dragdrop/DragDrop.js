import React, { useState } from "react";
import { Picture } from "./Picture";
import { useDrop } from "react-dnd";

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
    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]]);
    };
    return (
        <>
            <div className="Pictures">
                {PictureList.map((picture) => {
                    return <Picture imageUrl={picture.imageUrl} id={picture.id} />;
                })}
            </div>
            <div className="Board" ref={drop}>
                {board.map((picture) => {
                    return <Picture imageUrl={picture.imageUrl} id={picture.id} />;
                })}
            </div>
        </>
    );
}