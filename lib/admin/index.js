"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCommand = void 0;
var AdminCommand;
(function (AdminCommand) {
    AdminCommand["Statistics"] = "statistics";
    AdminCommand["Leaderboards"] = "leaderboards";
    AdminCommand["TopBets"] = "leaderboards:bets";
    AdminCommand["Users"] = "users";
    AdminCommand["User"] = "user";
    AdminCommand["CreateUser"] = "users:create";
    AdminCommand["UpdateUser"] = "users:update";
    AdminCommand["CreatePromocodes"] = "promocodes:create";
    AdminCommand["Tag"] = "promocodes:tag";
    AdminCommand["Tags"] = "promocodes:tags";
    AdminCommand["CreateTag"] = "promocodes:tags:create";
    AdminCommand["Referrals"] = "referrals";
    AdminCommand["Giveaway"] = "giveaway";
    AdminCommand["Giveaways"] = "giveaways";
    AdminCommand["CreateGiveaway"] = "giveaways:create";
    AdminCommand["UpdateGiveaway"] = "giveaways:update";
    AdminCommand["DeleteGiveaway"] = "giveaways:delete";
    AdminCommand["Rules"] = "rules";
    AdminCommand["UpdateRules"] = "rules:update";
})(AdminCommand = exports.AdminCommand || (exports.AdminCommand = {}));