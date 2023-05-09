import { useDrag } from "react-dnd";

export const Production = ({ id, productions, image }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "images",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }), [])

    return (

        <img
            className="images file-img"
            ref={drag}
            key={productions.id}
            src={image}
            alt="Production Image"
            width="150px"
            style={{ border: isDragging ? "5px solid pink" : "0px" }}
        />
    )
}