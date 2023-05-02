import { useDrag } from "react-dnd";

export const Format = ({ formats, images, id }) => {

    const [{ isDragging }, drag] = useDrag({
        type: "IMAGE",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <>
            <section className="images" key={id}>
                <div
                    ref={drag}
                    style={{
                        opacity: isDragging ? 0.5 : 1,
                        fontSize: 50,
                        fontWeight: 'bold',
                        cursor: "move",
                    }}
                >
                    <img src={images} className="images file-img" />
                </div>
            </section >

        </>)
}