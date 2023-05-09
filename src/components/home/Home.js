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
        <DndProvider
            backend={HTML5Backend}
            className="boxContainer">
            <div className="app">
                <DragDrop />
            </div>
            {/* <fieldset>
                <label>
                    Start Date:
                </label>
                <input
                    type="date" 
                /> 
            </fieldset>
            <fieldset>
                <label>
                    End Date:
                </label>
                <input
                    type="date" 
                /> 
            </fieldset>
            <button>
                save your creation.
            </button> */}
        </DndProvider>)
}