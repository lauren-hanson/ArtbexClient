// import { ToneList } from "../tone/ToneList"
// import { FormatList } from "../format/FormatList"

// import { AudienceList } from "../audience/AudienceList"
// import { ProductionList } from "../production/ProductionList"
// import { Create } from "../create/Create"
import { DragDrop } from "../dragdrop/DragDrop"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const Home = () => {

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="app">
                <DragDrop />
                {/* <div className="boxContainer">
            <h2>ArtBex</h2>
            <FormatList />
            <div className="middleContainer">
                <ToneList />
                <Create />
                <AudienceList />
            </div>
            <ProductionList />
        </div> */}
            </div>
        </DndProvider>)
}