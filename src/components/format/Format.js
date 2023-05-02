
export const Format = ({ images, id }) => {

    // const [{ isDragging }, drag] = useDrag({
    //     item: { type: "IMAGE", formats },
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging(),
    //     }),
    // });

    return (
        <>
            <section className="formats__card" key={id}>
                <div
                    // ref={drag}
                    // style={{
                    //     opacity: isDragging ? 0.5 : 1,
                    //     cursor: "move",
                    // }}
                >
                    <img src={images} className="images file-img" />
                </div>
            </section >
        </>)
}