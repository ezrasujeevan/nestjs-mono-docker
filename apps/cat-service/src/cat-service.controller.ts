import { BadRequestException, Controller, Get, UseFilters } from '@nestjs/common';
import { CatServiceService } from './cat-service.service';
import { MessagePattern } from '@nestjs/microservices';
import { ExceptionFilter } from './ExceptionFilter';

@Controller()
export class CatServiceController {
  constructor(private readonly catServiceService: CatServiceService) {}

  @MessagePattern('getCat')
  getHello(): string {
    return this.catServiceService.getHello();
  }
  @UseFilters(new ExceptionFilter())
  @MessagePattern('getCatError')
  getError(): string {
    throw new BadRequestException('Cat Error');
  }
}
