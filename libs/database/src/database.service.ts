import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  sayHello() {
    console.log('DatabaseService sayHello');
    return 'Hello World! from database service';
  }
}
