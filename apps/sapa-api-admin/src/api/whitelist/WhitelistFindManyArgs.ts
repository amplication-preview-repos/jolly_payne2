import { WhitelistWhereInput } from "./WhitelistWhereInput";
import { WhitelistOrderByInput } from "./WhitelistOrderByInput";

export type WhitelistFindManyArgs = {
  where?: WhitelistWhereInput;
  orderBy?: Array<WhitelistOrderByInput>;
  skip?: number;
  take?: number;
};
