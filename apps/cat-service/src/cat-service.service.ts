import { DatabaseService } from '@app/database';
import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatServiceService {
  private readonly prismaService: PrismaService;
  private readonly databaseService: DatabaseService;
  getHello(): string {
    this.databaseService.sayHello();
    this.prismaService.sayHello();
    return 'Hello World!';
  }
}
