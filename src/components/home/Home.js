import { ToneList } from "../tone/ToneList"
import { FormatList } from "../format/FormatList"
import { AudienceList } from "../audience/AudienceList"
import { ProductionList } from "../production/ProductionList"
import { Create } from "../create/Create"

export const Home = () => {


    return (<>
        <div className="boxContainer">
            <h2>ArtBex</h2>
            <FormatList />
            <div className="middleContainer">
                <ToneList />
                <Create />
                <AudienceList />
            </div>
            <ProductionList />
        </div>
    </>)
}