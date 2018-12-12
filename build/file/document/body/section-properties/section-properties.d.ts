import { FooterWrapper } from "file/footer-wrapper";
import { HeaderWrapper } from "file/header-wrapper";
import { XmlComponent } from "file/xml-components";
import { IColumnsAttributes } from "./columns/columns-attributes";
import { IDocGridAttributesProperties } from "./doc-grid/doc-grid-attributes";
import { IPageBordersOptions } from "./page-border";
import { IPageMarginAttributes } from "./page-margin/page-margin-attributes";
import { IPageNumberTypeAttributes } from "./page-number";
import { IPageSizeAttributes } from "./page-size/page-size-attributes";
export interface IHeaderFooterGroup<T> {
    readonly default?: T;
    readonly first?: T;
    readonly even?: T;
}
export interface IHeadersOptions {
    readonly headers?: IHeaderFooterGroup<HeaderWrapper>;
}
export interface IFootersOptions {
    readonly footers?: IHeaderFooterGroup<FooterWrapper>;
}
export interface ITitlePageOptions {
    readonly titlePage?: boolean;
}
export interface ISectionPropertiesOptions extends IPageSizeAttributes, IPageMarginAttributes, IColumnsAttributes, IDocGridAttributesProperties, IHeadersOptions, IFootersOptions, IPageNumberTypeAttributes, IPageBordersOptions, ITitlePageOptions {
}
export declare type SectionPropertiesOptions = ISectionPropertiesOptions;
export declare class SectionProperties extends XmlComponent {
    private readonly options;
    constructor(options?: SectionPropertiesOptions);
    private addHeaders;
    private addFooters;
    readonly Options: SectionPropertiesOptions;
}
