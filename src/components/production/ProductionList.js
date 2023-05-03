import { useEffect, useState } from "react"
import { getProductions } from "../../managers/ProductionManager"
import { Production } from "./Production"

export const ProductionList = () => {
    const [productions, setProductions] = useState([])

    useEffect(() => {
        getProductions().then((productionInfo) => setProductions(productionInfo))
    }, [])

    return (
        <>
            <div className="horizontalImageList bottom imageList">
            {/* <h2>Productions</h2> */}
                {productions.map((p) => {
                    return <Production key={p.id} productions={p.productions} id={p.id} images={p.imageUrl} type={p.type} />
                })}
            </div>
        </>
    )
}




