import { Module } from '@nestjs/common';
import { CatServiceController } from './cat-service.controller';
import { CatServiceService } from './cat-service.service';
@Module({
  controllers: [CatServiceController],
  providers: [CatServiceService],
})
export class CatServiceModule {}
