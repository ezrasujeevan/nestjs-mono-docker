import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(ApiGatewayModule,{ bufferLogs: true });
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor())
  await app.listen(port);
}
bootstrap();
