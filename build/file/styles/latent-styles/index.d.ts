import { XmlComponent } from "../../../file/xml-components";
import { LatentStyleException } from "./exceptions";
export declare class LatentStyles extends XmlComponent {
    constructor();
    push(latentException: LatentStyleException): void;
}
