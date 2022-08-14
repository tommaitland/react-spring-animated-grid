import { Position } from "./main"
import { AnimatedValue } from 'react-spring'
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
  refMeasures: any[],
  marginTop: number,
  marginRight: number,
  marginBottom: number,
  marginLeft: number,
  containerWidth: number,
): Position[] => {

  // TODO -- what is the units policy gonna be? as of know this should not work.
  // const containerWidth = typeof containerWidthRaw === "string"
  //  ? parseInt(containerWidthRaw.replace(/[a-z]+$/, ''))
  //  : containerWidthRaw

  // let t0 = performance.now()
  let currentRow = 0
  let currentTopOffset = 0
  let currentLeftOffset = 0
  let spaceRemainingX = containerWidth;
  let elHeights = [defaultItemHeight];
  
  const nextRow = () => {
    currentRow += 1
    currentTopOffset += marginTop + Math.max(elHeights) + marginBottom
    currentLeftOffset = 0
    spaceRemainingX = containerWidth
    
    // reset item heights for a new row
    elHeights = [defaultItemHeight];
  }

  const positions: Position[] = []
  elements.forEach((e, i) => {
    let elementWidth = refMeasures[i].width;
    elHeights.push(refMeasures[i].height);

    const necessarySpaceX = marginLeft + elementWidth + marginRight
    if (
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
