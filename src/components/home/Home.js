import { useCallback, useState } from "react"
// import { ToneList } from "../tone/ToneList"
// import { Dropzone } from "../dropzone/Dropzone"
import { FormatList } from "../format/FormatList"
import { Box } from "../box/Box"
import cuid from "cuid"

export const Home = () => {

    const [images, setImages] = useState([])

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.map(file => {
            const reader = new FileReader()

            reader.onload = function (e) {
                setImages(prevState => [
                    ...prevState,
                    { id: cuid(), imageUrl: e.target.result }
                ])
            }
            reader.readAsDataURL(file);
            return file;
        })
    }, []);

    return (<>
        <h2>ArtBex</h2>
        {/* <Dropzone onDrop={onDrop} accept={'image/*'} /> */}
        {/* <ToneList /> */}
        <FormatList />
        <Box />
    </>)
}