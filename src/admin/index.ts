export enum AdminCommand {
  Statistics = "statistics",
  Leaderboards = "leaderboards",
  TopBets = "leaderboards:bets",
  Users = "users",
  User = "user",
  CreateUser = "users:create",
  UpdateUser = "users:update",
  CreatePromocodes = "promocodes:create",
  Tag = "promocodes:tag",
  Tags = "promocodes:tags",
  CreateTag = "promocodes:tags:create",
  Referrals = "referrals",
  Giveaway = "giveaway",
  Giveaways = "giveaways",
  CreateGiveaway = "giveaways:create",
  UpdateGiveaway = "giveaways:update",
  DeleteGiveaway = "giveaways:delete",
  Rules = "rules",
  UpdateRules = "rules:update",
}

export const getMoonshotCommand = (command: AdminCommand) =>
  `moonshot:${command}`;

export const getTaycCommand = (command: AdminCommand) => `tayc:${command}`;
