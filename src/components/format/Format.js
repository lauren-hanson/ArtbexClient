import { useDrag } from "react-dnd";

export const Format = ({ id, formats }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "images",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }), [])

    return (
        <>
            <div className="horizontalImageList top imageList">
                <h4>Formats</h4>
                {formats.map((f) => {
                    return <img
                        className="images file-img"
                        ref={drag}
                        key={f.id}
                        src={f.imageUrl}
                        alt="Format Image"
                        width="150px"
                        style={{ border: isDragging ? "5px solid pink" : "0px" }}
                    />
                    // <Tone key={t?.id} id={t?.id} src={t?.imageUrl} />
                })}
            </div>
        </>)
}