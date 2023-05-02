import { useDrop } from 'react-dnd'

export const DropZone = (props) => {
  const [collectedProps, drop] = useDrop(() => ({
    
  }))

  return <div ref={drop}>Drop Target</div>
}