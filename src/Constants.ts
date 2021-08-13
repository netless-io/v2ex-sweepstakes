const defaultPostID = "794954";
const defaultWinnersNumber = 5;
const defaultNoParticipatingUsernameList = ["BlackHole1", "Leooe1"];

export const v2exPostURL = `https://www.v2ex.com/t/${process.env["POST_ID"] || defaultPostID}`;

export const winnersNumber = process.env["WINNERS_NUMBER"] || defaultWinnersNumber;

export const noParticipatingUsernameList: string[] = process.env["NO_PARTICIPATING_USERNAME_LIST"]
    ? JSON.parse(process.env["NO_PARTICIPATING_USERNAME_LIST"])
    : defaultNoParticipatingUsernameList;
