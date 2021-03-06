import { XmlAttributeComponent } from "./default-attributes";

export interface IAttributesProperties {
    readonly val?: string | number | boolean;
    readonly color?: string;
    readonly space?: string;
    readonly sz?: string;
    readonly type?: string;

    readonly clear?: string;
    readonly rsidR?: string;
    readonly rsidRPr?: string;
    readonly rsidSect?: string;
    readonly w?: string;
    readonly h?: string;
    readonly top?: string;
    readonly right?: string;
    readonly bottom?: string;
    readonly left?: string;
    readonly header?: string;
    readonly footer?: string;
    readonly gutter?: string;
    readonly linePitch?: string;
    readonly pos?: string | number; // Little strange. Perhaps it is normal. Need to clarify in the spec.
}

export class Attributes extends XmlAttributeComponent<IAttributesProperties> {
    protected readonly xmlKeys = {
        val: "w:val",
        color: "w:color",
        space: "w:space",
        sz: "w:sz",
        type: "w:type",
        clear: "w:clear",
        rsidR: "w:rsidR",
        rsidRPr: "w:rsidRPr",
        rsidSect: "w:rsidSect",
        w: "w:w",
        h: "w:h",
        top: "w:top",
        right: "w:right",
        bottom: "w:bottom",
        left: "w:left",
        header: "w:header",
        footer: "w:footer",
        gutter: "w:gutter",
        linePitch: "w:linePitch",
        pos: "w:pos",
    };
}
