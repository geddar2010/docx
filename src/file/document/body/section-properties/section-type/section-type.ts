import { XmlComponent } from "file/xml-components";

import { SectionTypeAttributes, SectionTypeValue } from "./section-type-attributes";

export class SectionType extends XmlComponent {
    constructor(type: SectionTypeValue) {
        super("w:type");

        this.root.push(
            new SectionTypeAttributes({
                type: type,
            }),
        );
    }
}
