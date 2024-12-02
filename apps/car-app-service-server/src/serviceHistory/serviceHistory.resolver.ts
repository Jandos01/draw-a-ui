import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ServiceHistoryResolverBase } from "./base/serviceHistory.resolver.base";
import { ServiceHistory } from "./base/ServiceHistory";
import { ServiceHistoryService } from "./serviceHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ServiceHistory)
export class ServiceHistoryResolver extends ServiceHistoryResolverBase {
  constructor(
    protected readonly service: ServiceHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
