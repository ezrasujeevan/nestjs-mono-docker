import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { DatabaseModule } from '@app/database';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [DatabaseModule, PrismaModule],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
