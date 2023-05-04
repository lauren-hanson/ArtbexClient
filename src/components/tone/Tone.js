import { useDrag } from "react-dnd";

export const Tone = ({ imageUrl, id, type }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <>
            <section className="images" key={id}>
                <div

                    style={{
                        opacity: isDragging ? 0.5 : 1,
                        // fontSize: 50,
                        // fontWeight: 'bold',
                        cursor: "move",
                    }}
                >
                    {/* {type} */}
                    <img
                        ref={drag}
                        src={imageUrl}
                        className="images file-img" />
                </div>
            </section >

        </>)
}