import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceHistoryServiceBase } from "./base/serviceHistory.service.base";

@Injectable()
export class ServiceHistoryService extends ServiceHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
