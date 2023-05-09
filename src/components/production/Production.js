import { useDrag } from "react-dnd";

export const Production = ({ id, productions }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "images",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }), [])

    return (
        <div className="horizontalImageList bottom imageList">
            <h4>Productions</h4>
            {productions.map((p) => {
                return <img
                    className="images file-img"
                    key={p.id}
                    ref={drag}
                    src={p.imageUrl}
                    alt="Production Image"
                    width="150px"
                    style={{ border: isDragging ? "5px solid pink" : "0px" }}
                />
            })}
        </div>
    )
}