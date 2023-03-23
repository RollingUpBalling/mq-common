import { IDates, IOptionalToken, IPagination, ISort, IToken } from "../../base";
export interface IGetUsersQuery extends IOptionalToken, IPagination, ISort {
    searchString?: string;
}
export interface ICreateUser extends IToken {
    address: string;
    referralCode?: string;
}
export interface ILeaderboardsQuery extends IToken, IDates, IPagination, ISort {
}
export interface IStatisticsQuery extends IToken, IDates {
}
export interface IReferralQuery extends IToken, IDates, IPagination {
}
export interface ICreateTag {
    message: string;
}
export interface ICreatePromocodes extends IToken {
    amount: number;
    receiverAddresses: string;
    tagId: string;
    referralCode?: string;
}
export interface IGiveawaysQuery {
    active?: boolean;
    statuses?: string[];
}
