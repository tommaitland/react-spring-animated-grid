import { ReactElement, CSSProperties } from "react";
export interface GridProps {
    children: ReactElement[];
    style?: CSSProperties;
    itemMarginTop?: number;
    itemMarginRight?: number;
    itemMarginBottom?: number;
    itemMarginLeft?: number;
}
export declare function GridComponent(props: GridProps): JSX.Element;
