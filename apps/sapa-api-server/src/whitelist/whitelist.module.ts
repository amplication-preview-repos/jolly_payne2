import { Module } from "@nestjs/common";
import { WhitelistModuleBase } from "./base/whitelist.module.base";
import { WhitelistService } from "./whitelist.service";
import { WhitelistController } from "./whitelist.controller";
import { WhitelistResolver } from "./whitelist.resolver";

@Module({
  imports: [WhitelistModuleBase],
  controllers: [WhitelistController],
  providers: [WhitelistService, WhitelistResolver],
  exports: [WhitelistService],
})
export class WhitelistModule {}
