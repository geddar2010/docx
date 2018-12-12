import { XmlComponent } from "../../../file/xml-components";
import { Run } from "../run";
export declare enum BreakType {
    TEXTWRAPPING = "textWrapping",
    PAGE = "page",
    COLUMN = "column"
}
export declare enum ClearType {
    ALL = "all",
    LEFT = "left",
    NONE = "none",
    RIGHT = "right"
}
export declare class PageBreak extends Run {
    constructor();
}
export declare class ColumnBreak extends Run {
    constructor();
}
export declare class LineBreak extends Run {
    constructor();
}
export declare class LineBreakLeft extends Run {
    constructor();
}
export declare class LineBreakRight extends Run {
    constructor();
}
export declare class LineBreakBoth extends Run {
    constructor();
}
export declare class PageBreakBefore extends XmlComponent {
    constructor();
}
