import { CreateArtBex } from "../artbex/CreateArtBex"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const Home = () => {

    return (
        <DndProvider
            backend={HTML5Backend}
            className="boxContainer">
            <div className="app">
                <CreateArtBex />
            </div>
        </DndProvider>)
}