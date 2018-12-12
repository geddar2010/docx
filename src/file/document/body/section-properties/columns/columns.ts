import { XmlComponent } from "file/xml-components";
import { ColumnsAttributes } from "./columns-attributes";

export class Columns extends XmlComponent {
    constructor(space: number, equalWidth: boolean, num: number, sep: boolean) {
        super("w:cols");
        this.root.push(
            new ColumnsAttributes({
                space: space,
                equalWidth: equalWidth,
                num: num,
                sep: sep,
            }),
        );
    }
}
