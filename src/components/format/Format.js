import { useDrag } from "react-dnd";

export const Format = ({ image, id, type }) => {

    const [{ isDragging }, drag] = useDrag({
        type: "IMAGE",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    return (
        <>
            <section className="images" key={id}>
                <div
                    ref={drag}
                    style={{
                        opacity: isDragging ? 0.5 : 1,
                        // fontSize: 50,
                        // fontWeight: 'bold',
                        // cursor: "move",
                    }}
                >

                    {/* {type} */}
                    <img className="images file-img"
                        ref={drag}
                        src={image}
                        alt="tone"
                        width="150px"
                        style={{ border: isDragging ? "5px solid pink" : "0px" }} />
                </div>
            </section >

        </>)
}