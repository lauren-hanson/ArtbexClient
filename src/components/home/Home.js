import { ToneList } from "../tone/ToneList"
import { FormatList } from "../format/FormatList"
import { AudienceList } from "../audience/AudienceList"
import { ProductionList } from "../production/ProductionList"
import { Box } from "../box/Box"

export const Home = () => {


    return (<>
        <div className="boxContainer">
            <h2>ArtBex</h2>
            <FormatList />
            <div className="middleContainer">
                <ToneList />
                <Box />
                <AudienceList />
            </div>
            <ProductionList />
        </div>
    </>)
}