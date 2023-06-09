declare enum Token {
    Near = "near",
    Sol = "sol",
    Bonk = "bonk",
    Apt = "apt",
    NearB = "nearb",
    SolB = "solb",
    BonkB = "bonkb",
    AptB = "aptb",
    Matic = "matic",
    Arb = "arb",
    MaticB = "maticb",
    ArbB = "arbb"
}
export type IToken = {
    token: Token;
};
export type IOptionalToken = Partial<IToken>;
export type IPagination = {
    limit?: number;
    offset?: number;
};
export type ISort = {
    sortField?: string;
    sortOrder?: string;
};
export type IDates = {
    startDate: Date;
    endDate: Date;
};
export type IOptionalDates = Partial<IDates>;
export {};
