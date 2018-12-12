// http://officeopenxml.com/WPtextSpecialContent-break.php
import { Attributes, XmlComponent } from "file/xml-components";
import { Run } from "../run";

export enum BreakType {
    TEXTWRAPPING = "textWrapping",
    PAGE = "page",
    COLUMN = "column",
}

export enum ClearType {
    ALL = "all",
    LEFT = "left",
    NONE = "none",
    RIGHT = "right",
}

class Break extends XmlComponent {
    constructor() {
        super("w:br");
        this.root.push(
            new Attributes({
                type: BreakType.TEXTWRAPPING,
                clear: ClearType.NONE,
            }),
        );
    }
}
class BreakLeft extends XmlComponent {
    constructor() {
        super("w:br");
        this.root.push(
            new Attributes({
                type: BreakType.TEXTWRAPPING,
                clear: ClearType.LEFT,
            }),
        );
    }
}
class BreakRight extends XmlComponent {
    constructor() {
        super("w:br");
        this.root.push(
            new Attributes({
                type: BreakType.TEXTWRAPPING,
                clear: ClearType.RIGHT,
            }),
        );
    }
}
class BreakBoth extends XmlComponent {
    constructor() {
        super("w:br");
        this.root.push(
            new Attributes({
                type: BreakType.TEXTWRAPPING,
                clear: ClearType.ALL,
            }),
        );
    }
}

class BreakColumn extends XmlComponent {
    constructor() {
        super("w:br");
        this.root.push(
            new Attributes({
                type: BreakType.COLUMN,
            }),
        );
    }
}

class BreakPage extends XmlComponent {
    constructor() {
        super("w:br");
        this.root.push(
            new Attributes({
                type: BreakType.PAGE,
            }),
        );
    }
}

export class PageBreak extends Run {
    constructor() {
        super();
        this.root.push(new BreakPage());
    }
}

export class ColumnBreak extends Run {
    constructor() {
        super();
        this.root.push(new BreakColumn());
    }
}

export class LineBreak extends Run {
    constructor() {
        super();
        this.root.push(new Break());
    }
}
export class LineBreakLeft extends Run {
    constructor() {
        super();
        this.root.push(new BreakLeft());
    }
}
export class LineBreakRight extends Run {
    constructor() {
        super();
        this.root.push(new BreakRight());
    }
}
export class LineBreakBoth extends Run {
    constructor() {
        super();
        this.root.push(new BreakBoth());
    }
}
/**
 * Add page break before the paragraph if there is no one added before.
 */
export class PageBreakBefore extends XmlComponent {
    constructor() {
        super("w:pageBreakBefore");
    }
}
