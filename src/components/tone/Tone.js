import { useDrag } from "react-dnd";

export const Tone = ({ imageUrl, id }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "images",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <>
            <img
                ref={drag}
                src={imageUrl}
                width="150px"
                style={{ border: isDragging ? "5px solid pink" : "0px" }}
            />

        </>)
}