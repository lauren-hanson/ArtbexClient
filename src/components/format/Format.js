import { useDrag } from "react-dnd";

export const Format = ({ id, formats, image }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "images",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }), [])

    return (
        <>
            <img
                className="images file-img"
                ref={drag}
                key={formats.id}
                src={image}
                alt="Format Image"
                width="150px"
                style={{ border: isDragging ? "5px solid pink" : "0px" }}
            />
        </>)
}