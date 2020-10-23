import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  home() {
    return this.appService.home();
  }


  @Get('hi')
  getHello(): string {
    return this.appService.getHello();
  }
}
