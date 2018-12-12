import { XmlAttributeComponent } from "file/xml-components";

export interface IColumnsAttributes {
    readonly space?: number;
    readonly equalWidth?: boolean;
    readonly num?: number;
    readonly sep?: boolean;
}

export class ColumnsAttributes extends XmlAttributeComponent<IColumnsAttributes> {
    protected readonly xmlKeys = {
        space: "w:space",
        equalWidth: "w:equalWidth",
        num: "w:num",
        sep: "w:sep",
    };
}
