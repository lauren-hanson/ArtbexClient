import { ToneList } from "../tone/ToneList"
import { FormatList } from "../format/FormatList"
import { AudienceList } from "../audience/AudienceList"
import { ProductionList } from "../production/ProductionList"
import { Box } from "../box/Box"

export const Home = () => {


    return (<>
        <h2>ArtBex</h2>
        <div className="boxContainer">
            <FormatList />
            <ToneList />
            <AudienceList />
            <ProductionList />
            <Box />
        </div>
    </>)
}