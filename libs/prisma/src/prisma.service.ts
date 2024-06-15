import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService {
  sayHello() {
    console.log('PrismaService sayHello');
    return 'Hello World! from prisma service';
  }
}
