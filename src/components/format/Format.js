import { useDrag } from "react-dnd";

export const Format = ({ id, image }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <>
            <img
                className="images file-img"
                ref={drag}
                id={id}
                src={image}
                alt="Format Image"
                width="150px"
                style={{ border: isDragging ? "5px solid pink" : "0px" }}
            />
        </>)
}