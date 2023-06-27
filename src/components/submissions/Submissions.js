import { getArtbexs } from "../../managers/ArtbexManager"
import { useEffect, useState } from "react"
import { HumanDate } from "../utils/HumanDate"
import "./Submissions.css"

export const Submissions = () => {

    const [submissions, setSubmissions] = useState([])

    useEffect(() => {
        getArtbexs().then((s) => {
            setSubmissions(s)
        })

    }, [])

    return (<>
        <div className="submissions">
            <h2>List of Submissions.</h2>
            {submissions.map((sub) => {
                return <div className="submission" key={`sub--${sub?.id}`}>
                        <HumanDate date={sub?.startDate} /> - <HumanDate date={sub?.endDate} />
                        <div className="subImages">
                            {sub.images.map((i) => (
                                <ol key={i.id} className="subImage">
                                    <img src={i.image} />
                                </ol>))}
                        </div>
                        <div>
                            {sub.notes}
                        </div>
                    </div>
            })}
                </div>
    </>)
}