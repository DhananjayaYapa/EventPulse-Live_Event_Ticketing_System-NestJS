import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonService } from './libs/common/common.service';
import { HealthModule } from './libs/common/health/health.module';

@Module({
  imports: [HealthModule],
  controllers: [AppController],
  providers: [AppService, CommonService],
})
export class AppModule {}
