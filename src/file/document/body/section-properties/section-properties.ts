// http://officeopenxml.com/WPsection.php
import { FooterWrapper } from "file/footer-wrapper";
import { HeaderWrapper } from "file/header-wrapper";
import { XmlComponent } from "file/xml-components";

import { ISectionTypeAttributes, SectionType, SectionTypeValue } from ".";
import { Columns } from "./columns/columns";
import { IColumnsAttributes } from "./columns/columns-attributes";
import { DocumentGrid } from "./doc-grid/doc-grid";
import { IDocGridAttributesProperties } from "./doc-grid/doc-grid-attributes";
import { FooterReferenceType } from "./footer-reference";
import { FooterReference } from "./footer-reference/footer-reference";
import { HeaderReferenceType } from "./header-reference";
import { HeaderReference } from "./header-reference/header-reference";
import { IPageBordersOptions, PageBorders } from "./page-border";
import { PageMargin } from "./page-margin/page-margin";
import { IPageMarginAttributes } from "./page-margin/page-margin-attributes";
import { IPageNumberTypeAttributes, PageNumberType } from "./page-number";
import { PageSize } from "./page-size/page-size";
import { IPageSizeAttributes, PageOrientation } from "./page-size/page-size-attributes";
import { TitlePage } from "./title-page/title-page";

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

export interface ISectionPropertiesOptions
    extends ISectionTypeAttributes,
        IColumnsAttributes,
        IDocGridAttributesProperties,
        IFootersOptions,
        IHeadersOptions,
        IPageBordersOptions,
        IPageMarginAttributes,
        IPageNumberTypeAttributes,
        ITitlePageOptions,
        IPageSizeAttributes {}

export type SectionPropertiesOptions = ISectionPropertiesOptions;

export class SectionProperties extends XmlComponent {
    private readonly options: SectionPropertiesOptions;

    constructor(options: SectionPropertiesOptions = {}) {
        super("w:sectPr");

        const {
            bottom = 1133,
            equalWidth = true,
            footer = 708,
            footers,
            gutter = 0,
            header = 1700,
            headers,
            height = 16839,
            left = 1440,
            linePitch = 360,
            mirror = false,
            num = 1,
            orientation = PageOrientation.PORTRAIT,
            pageBorderBottom,
            pageBorderLeft,
            pageBorderRight,
            pageBorders,
            pageBorderTop,
            pageNumberFormatType,
            pageNumberStart,
            right = 1133,
            sep = false,
            space = 284,
            titlePage = false,
            top = 1133,
            type = SectionTypeValue.CONTINUOUS,
            width = 11907,
        } = options;

        this.options = options;
        this.root.push(new SectionType(type));
        this.root.push(new PageSize(width, height, orientation));
        this.root.push(new PageMargin(top, right, bottom, left, header, footer, gutter, mirror));
        this.root.push(new Columns(space, equalWidth, num, sep));
        this.root.push(new DocumentGrid(linePitch));

        this.addHeaders(headers);
        this.addFooters(footers);

        if (pageNumberStart || pageNumberFormatType) {
            this.root.push(new PageNumberType(pageNumberStart, pageNumberFormatType));
        }

        if (pageBorders || pageBorderTop || pageBorderRight || pageBorderBottom || pageBorderLeft) {
            this.root.push(
                new PageBorders({
                    pageBorders: pageBorders,
                    pageBorderTop: pageBorderTop,
                    pageBorderRight: pageBorderRight,
                    pageBorderBottom: pageBorderBottom,
                    pageBorderLeft: pageBorderLeft,
                }),
            );
        }

        if (titlePage) {
            this.root.push(new TitlePage());
        }
    }

    private addHeaders(headers?: IHeaderFooterGroup<HeaderWrapper>): void {
        if (headers) {
            if (headers.default) {
                this.root.push(
                    new HeaderReference({
                        headerType: HeaderReferenceType.DEFAULT,
                        headerId: headers.default.Header.ReferenceId,
                    }),
                );
            }

            if (headers.first) {
                this.root.push(
                    new HeaderReference({
                        headerType: HeaderReferenceType.FIRST,
                        headerId: headers.first.Header.ReferenceId,
                    }),
                );
            }

            if (headers.even) {
                this.root.push(
                    new HeaderReference({
                        headerType: HeaderReferenceType.EVEN,
                        headerId: headers.even.Header.ReferenceId,
                    }),
                );
            }
        }
    }

    private addFooters(footers?: IHeaderFooterGroup<FooterWrapper>): void {
        if (footers) {
            if (footers.default) {
                this.root.push(
                    new FooterReference({
                        footerType: FooterReferenceType.DEFAULT,
                        footerId: footers.default.Footer.ReferenceId,
                    }),
                );
            }

            if (footers.first) {
                this.root.push(
                    new FooterReference({
                        footerType: FooterReferenceType.FIRST,
                        footerId: footers.first.Footer.ReferenceId,
                    }),
                );
            }

            if (footers.even) {
                this.root.push(
                    new FooterReference({
                        footerType: FooterReferenceType.EVEN,
                        footerId: footers.even.Footer.ReferenceId,
                    }),
                );
            }
        }
    }

    public get Options(): SectionPropertiesOptions {
        return this.options;
    }
}
