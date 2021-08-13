import puppeteer from "puppeteer";
import shuffle from "shuffle-array";
import { QueryReplyUsernameList } from "./QueryReplyUsernameList";
import { winnersNumber } from "./Constants";
import assert from "assert";

void (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        const replyUsernameList = await new QueryReplyUsernameList(page).exec();

        assert(replyUsernameList.length > winnersNumber, "reply users > winners number");

        const winners = shuffle.pick(replyUsernameList, {
            picks: Number(winnersNumber),
        }) as string[];

        winners.forEach((username, index) => {
            console.log(`${index + 1}: ${username}`);
        });
    } catch (error) {
        console.error(error.message);
    } finally {
        await browser.close();
    }
})();
