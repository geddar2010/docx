import { XmlAttributeComponent } from "file/xml-components";

export enum SectionTypeValue {
    CONTINUOUS = "continuous",
    EVENPAGE = "evenPage",
    NEXTCOLUMN = "nextColumn",
    NEXTPAGE = "nextPage",
    ODDPAGE = "oddPage",
}

export interface ISectionTypeAttributes {
    readonly type?: SectionTypeValue;
}
export class SectionTypeAttributes extends XmlAttributeComponent<ISectionTypeAttributes> {
    protected readonly xmlKeys = {
        type: "w:val",
    };
}
