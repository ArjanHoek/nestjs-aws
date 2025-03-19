import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is the very latest version...';
  }

  getGoodbye(): string {
    return 'Goodbye World!';
  }
}
