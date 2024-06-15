import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(ApiGatewayModule);
  await app.listen(port);
}
bootstrap();
