import { useEffect, useState } from "react"
import { getAudiences } from "../../managers/AudienceManager"
import { Audience } from "./Audience"

export const AudienceList = () => {
    const [audiences, setAudiences] = useState([])

    useEffect(() => {
        getAudiences().then((audienceInfo) => setAudiences(audienceInfo))
    }, [])

    return (
        <>
            <div className="verticalImageList right imageList">
                {/* <h2>Audiences</h2> */}
                {audiences.map((a) => {
                    return <Audience key={a.id} audiences={a.audiences} id={a.id} images={a.imageUrl} type={a.type} />
                })}
            </div>
        </>
    )
}




