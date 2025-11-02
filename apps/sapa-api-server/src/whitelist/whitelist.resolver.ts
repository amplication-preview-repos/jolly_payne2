import * as graphql from "@nestjs/graphql";
import { WhitelistResolverBase } from "./base/whitelist.resolver.base";
import { Whitelist } from "./base/Whitelist";
import { WhitelistService } from "./whitelist.service";

@graphql.Resolver(() => Whitelist)
export class WhitelistResolver extends WhitelistResolverBase {
  constructor(protected readonly service: WhitelistService) {
    super(service);
  }
}
