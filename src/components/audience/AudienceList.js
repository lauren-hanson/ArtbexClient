import { useEffect, useState } from "react"
import { getAudiences } from "../../managers/AudienceManager"
import { Audience } from "./Audience"

export const AudienceList = ({ key, id, image }) => {
    const [audiences, setAudiences] = useState([])

    useEffect(() => {
        getAudiences().then((audienceInfo) => setAudiences(audienceInfo))
    }, [])

    return (
        <>
            <div className="verticalImageList right imageList">
                <h4>Audiences</h4>
                {audiences.map((a) => {
                    return <Audience key={key} audiences={a?.audiences} id={id} image={image} type={a?.type} />
                })}
            </div>
        </>
    )
}




