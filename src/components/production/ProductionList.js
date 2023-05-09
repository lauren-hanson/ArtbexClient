import { useEffect, useState } from "react"
import { Production } from "./Production"

export const ProductionList = ({ productions }) => {

    return (
        <>
            <div className="horizontalImageList bottom imageList">
                <h4>Productions</h4>
                {productions.map((p) => {
                    return <Production key={p.id} productions={p.productions} id={p.id} image={p.imageUrl} type={p.type} />
                })}
            </div>
        </>
    )
}




