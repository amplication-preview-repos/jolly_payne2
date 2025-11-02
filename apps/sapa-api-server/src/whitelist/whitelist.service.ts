import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WhitelistServiceBase } from "./base/whitelist.service.base";

@Injectable()
export class WhitelistService extends WhitelistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
