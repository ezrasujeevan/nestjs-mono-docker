import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { LoggerModule } from 'nestjs-pino';
import pino from 'pino';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        customProps: (req, res) => ({ context: 'HTTP' }),
        timestamp: true,
        transport: {
          targets: [
            {
              target: 'pino-pretty',
              options: {
                singleLine: true,
                colorizeObjects: true,
              },
            },
            {
              target: 'pino/file',
              options: {
                destination: './logs/api-gateway.log',
                sync: true,

              },
            },
          ],
        },
      },
    }),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
