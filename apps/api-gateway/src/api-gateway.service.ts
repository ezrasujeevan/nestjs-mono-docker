import { Inject, Injectable } from '@nestjs/common';
import { ClientTCP } from '@nestjs/microservices';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable()
export class ApiGatewayService {
  constructor(@Inject('CAT_SERVICE') private readonly client: ClientTCP) {}
  getHello(): string {
    return 'Hello World!';
  }

  async GetCat(): Promise<any> {
    return await lastValueFrom(this.client.send('getCat', ''));
  }

  async GetCatError(): Promise<any> {
    return lastValueFrom(this.client.send('getCatError', ''));
  }
}
