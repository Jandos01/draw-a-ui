import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServiceHistoryService } from "./serviceHistory.service";
import { ServiceHistoryControllerBase } from "./base/serviceHistory.controller.base";

@swagger.ApiTags("serviceHistories")
@common.Controller("serviceHistories")
export class ServiceHistoryController extends ServiceHistoryControllerBase {
  constructor(
    protected readonly service: ServiceHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
