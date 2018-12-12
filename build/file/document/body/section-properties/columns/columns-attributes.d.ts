import { XmlAttributeComponent } from "../../../../../file/xml-components";
export interface IColumnsAttributes {
    readonly space?: number;
    readonly equalWidth?: boolean;
    readonly num?: number;
    readonly sep?: boolean;
}
export declare class ColumnsAttributes extends XmlAttributeComponent<IColumnsAttributes> {
    protected readonly xmlKeys: {
        space: string;
        equalWidth: string;
        num: string;
        sep: string;
    };
}
