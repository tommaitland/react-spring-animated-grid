import { Position } from "./main"
import {
  defaultMarginRight,
  defaultMarginLeft,
  defaultMarginTop,
  defaultMarginBottom,

  defaultItemHeight,
  defaultItemWidth
} from './defaults'

export const calculateLayout = (
  elements: React.ReactElement[],
  marginTop: number,
  marginRight: number,
  marginBottom: number,
  marginLeft: number,
  containerWidth: number
): Position[] => {
  // let t0 = performance.now()
  let currentRow = 0
  let currentTopOffset = 0
  let currentLeftOffset = 0
  let spaceRemainingX = containerWidth
  
  const nextRow = () => {
    currentRow += 1
    currentTopOffset += marginTop + defaultItemHeight + marginBottom
    currentLeftOffset = 0
    spaceRemainingX = containerWidth
  }

  const positions: Position[] = []
  
  elements.forEach((e, i) => {
    const elementWidth = e.props.style.width
    const necessarySpaceX = marginLeft + elementWidth + marginRight
    if (
      // FIXME -- There is a weird behavior because of bigger boxes than the
      // container width. which makes the grid behave weirdly. Maybe if boxes 
      // are wider than container width we always need to jump line.
      (spaceRemainingX <= necessarySpaceX && 
      containerWidth > necessarySpaceX) || 
      (necessarySpaceX >= containerWidth && i !== 0)
    ){
      nextRow()
    }
    positions.push({
      row: currentRow,
      top: currentTopOffset + marginTop,
      left: currentLeftOffset + marginLeft
    })
    spaceRemainingX -= necessarySpaceX
    currentLeftOffset += necessarySpaceX
  })
  return positions;
  // let t1 = performance.now()
  // console.log(`Call to calculateLayout took ${t1 - t0} milliseconds.`)
}