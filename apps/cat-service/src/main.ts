import { NestFactory } from '@nestjs/core';
import { CatServiceModule } from './cat-service.module';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { ExceptionFilter } from './ExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(CatServiceModule);
  app.useGlobalFilters(new ExceptionFilter());
  app.connectMicroservice<TcpOptions>({
    transport: Transport.TCP,
    options: { port: 3001 },
  });
  app.startAllMicroservices();
}
bootstrap();
