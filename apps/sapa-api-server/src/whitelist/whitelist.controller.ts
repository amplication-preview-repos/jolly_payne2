import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WhitelistService } from "./whitelist.service";
import { WhitelistControllerBase } from "./base/whitelist.controller.base";

@swagger.ApiTags("whitelists")
@common.Controller("whitelists")
export class WhitelistController extends WhitelistControllerBase {
  constructor(protected readonly service: WhitelistService) {
    super(service);
  }
}
