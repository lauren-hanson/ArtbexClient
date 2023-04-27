import React from 'react'
import { useDropzone } from 'react-dropzone'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import "../dropzone/Dropzone.css"

export const Box = () => {


    return <DndProvider backend={HTML5Backend}>
        <div className="artbex-div">

            <p className="artbex-content">Create Here</p>

        </div>
    </DndProvider>
}
