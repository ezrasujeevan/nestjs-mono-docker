import { Controller, Get } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.apiGatewayService.getHello();
  }

  @Get('cat')
  getCat(): Promise<any> {
    return this.apiGatewayService.GetCat();
  }

  @Get('error')
  getCatError(): Promise<any> {
    return this.apiGatewayService.GetCatError();
  }
}
