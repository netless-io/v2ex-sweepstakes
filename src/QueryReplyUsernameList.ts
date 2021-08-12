import { Page } from "puppeteer";
import assert from "assert";
import { noParticipatingUsernameList, v2exPostURL } from "./Constants";

export class QueryReplyUsernameList {
    // eslint-disable-next-line no-useless-constructor
    public constructor(private readonly page: Page) {}

    public async exec(): Promise<string[]> {
        await this.pageGoto(v2exPostURLByPageNumber(1));

        const pageNumber = await this.postPageNumber();

        const usernameList = [];
        for (let i = 1; i <= pageNumber; i++) {
            await this.pageGoto(v2exPostURLByPageNumber(i));
            usernameList.push(...(await this.queryReplyUsername()));
        }

        const result = Array.from(new Set(usernameList));

        return result.filter(username => {
            return noParticipatingUsernameList.indexOf(username) === -1;
        });
    }

    private async queryReplyUsername(): Promise<string[]> {
        return await this.page.$$eval(QueryReplyUsernameList.selectorReplyUserNames, elements => {
            return elements.map(element => {
                // @ts-ignore
                return element.innerText;
            });
        });
    }

    private async postPageNumber(): Promise<number> {
        const result = await this.page.$$eval(
            QueryReplyUsernameList.selectorPostPageNumber,
            elements =>
                elements.map(element => {
                    // @ts-ignore
                    return element.max;
                }),
        );

        assert(result.length !== 0, "post no reply");

        return result[0];
    }

    private async pageGoto(url: string): Promise<void> {
        if (this.page.url() === url) {
            return;
        }

        await this.page.goto(url);
    }

    private static get selectorReplyUserNames(): string {
        return "#Main .cell > table > tbody > tr > td:last-child > strong > a";
    }

    private static get selectorPostPageNumber(): string {
        return ".page_input";
    }
}

const v2exPostURLByPageNumber = (page = 1): string => {
    return `${v2exPostURL}?p=${page}`;
};
