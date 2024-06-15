import { NestFactory } from '@nestjs/core';
import { CatServiceModule } from './cat-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CatServiceModule);
  await app.listen(3000);
}
bootstrap();
