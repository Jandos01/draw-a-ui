/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ServiceHistory as PrismaServiceHistory,
  Car as PrismaCar,
} from "@prisma/client";

export class ServiceHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ServiceHistoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.serviceHistory.count(args);
  }

  async serviceHistories(
    args: Prisma.ServiceHistoryFindManyArgs
  ): Promise<PrismaServiceHistory[]> {
    return this.prisma.serviceHistory.findMany(args);
  }
  async serviceHistory(
    args: Prisma.ServiceHistoryFindUniqueArgs
  ): Promise<PrismaServiceHistory | null> {
    return this.prisma.serviceHistory.findUnique(args);
  }
  async createServiceHistory(
    args: Prisma.ServiceHistoryCreateArgs
  ): Promise<PrismaServiceHistory> {
    return this.prisma.serviceHistory.create(args);
  }
  async updateServiceHistory(
    args: Prisma.ServiceHistoryUpdateArgs
  ): Promise<PrismaServiceHistory> {
    return this.prisma.serviceHistory.update(args);
  }
  async deleteServiceHistory(
    args: Prisma.ServiceHistoryDeleteArgs
  ): Promise<PrismaServiceHistory> {
    return this.prisma.serviceHistory.delete(args);
  }

  async getCar(parentId: string): Promise<PrismaCar | null> {
    return this.prisma.serviceHistory
      .findUnique({
        where: { id: parentId },
      })
      .car();
  }
}
