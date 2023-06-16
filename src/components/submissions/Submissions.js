import { getArtbexs } from "../../managers/ArtbexManager"
import { useEffect, useState } from "react"

export const Submissions = () => {

    const [submissions, setSubmissions] = useState([])

    useEffect(() => {
        getArtbexs().then((s) => {
            setSubmissions(s)
        })

    }, [])

    return (<>
        <h2>List of Submissions.</h2>
        <div>
            {submissions.map((s) => {
                <p>{s?.id}</p>
            })}
        </div>
    </>)
}