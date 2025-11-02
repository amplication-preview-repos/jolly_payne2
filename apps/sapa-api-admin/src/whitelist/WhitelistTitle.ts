import { Whitelist as TWhitelist } from "../api/whitelist/Whitelist";

export const WHITELIST_TITLE_FIELD = "name";

export const WhitelistTitle = (record: TWhitelist): string => {
  return record.name?.toString() || String(record.id);
};
