import { Module } from '@nestjs/common';
import { LoggerService } from './pino-logger.service';


@Module({
  imports: [LoggerModule.forRoot()],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
