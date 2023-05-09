import { useDrag } from "react-dnd";

export const Production = ({ image, id, type }) => {

    const [{ isDragging }, drag] = useDrag({
        type: "IMAGE",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <>
            <section className="images" key={id}>

                <img
                    className="images file-img"
                    ref={drag}
                    src={image}
                    alt="tone"
                    width="150px"
                    style={{ border: isDragging ? "5px solid pink" : "0px" }} />
        </section >

        </>)
}