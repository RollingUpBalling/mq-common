import { IDates, IOptionalToken, IPagination, ISort, IToken } from "../../base";

export interface IStatsQuery extends IToken, IDates {
  gameType: string;
}

export interface ILeaderboardsQuery extends IToken, IDates {
  gameType: string;
  leaderboardType: string;
}

export interface IGetUsersQuery extends IOptionalToken, IPagination, ISort {
  searchString?: string;
}

export interface ICreateUser extends IToken {
  address: string;
}
