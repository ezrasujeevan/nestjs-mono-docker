import { Module } from '@nestjs/common';
import { CatServiceController } from './cat-service.controller';
import { CatServiceService } from './cat-service.service';
import { PrismaModule } from '@app/prisma';
import { DatabaseModule } from '@app/database';

@Module({
  imports: [PrismaModule,DatabaseModule],
  controllers: [CatServiceController],
  providers: [CatServiceService],
})
export class CatServiceModule {}
