import { XmlAttributeComponent } from "../../../../../file/xml-components";
export declare enum SectionTypeValue {
    CONTINUOUS = "continuous",
    EVENPAGE = "evenPage",
    NEXTCOLUMN = "nextColumn",
    NEXTPAGE = "nextPage",
    ODDPAGE = "oddPage"
}
export interface ISectionTypeAttributes {
    readonly type?: SectionTypeValue;
}
export declare class SectionTypeAttributes extends XmlAttributeComponent<ISectionTypeAttributes> {
    protected readonly xmlKeys: {
        type: string;
    };
}
