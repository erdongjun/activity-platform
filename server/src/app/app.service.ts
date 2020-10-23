import { Injectable } from '@nestjs/common';
import {PageConfig} from './interfaces/app.interface'

@Injectable()
export class AppService {
  
  home(): PageConfig {
    return {
      title: '活动平台',
      icon: '1',
      intro: '活动配置后台',
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
