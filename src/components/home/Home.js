import { ToneList } from "../tone/ToneList"
import { FormatList } from "../format/FormatList"
import { DropZone } from "../dropzone/Dropzone"
import { Box } from "../box/Box"

export const Home = () => {


    return (<>
        <h2>ArtBex</h2>
        <ToneList />
        <FormatList />
        <Box />
    </>)
}