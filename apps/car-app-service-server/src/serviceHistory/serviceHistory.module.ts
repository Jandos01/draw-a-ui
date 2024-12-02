import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ServiceHistoryModuleBase } from "./base/serviceHistory.module.base";
import { ServiceHistoryService } from "./serviceHistory.service";
import { ServiceHistoryController } from "./serviceHistory.controller";
import { ServiceHistoryResolver } from "./serviceHistory.resolver";

@Module({
  imports: [ServiceHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [ServiceHistoryController],
  providers: [ServiceHistoryService, ServiceHistoryResolver],
  exports: [ServiceHistoryService],
})
export class ServiceHistoryModule {}
