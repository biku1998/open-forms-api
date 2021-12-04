import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { status: string; message: string } {
    return {
      message: 'open-forms backend API',
      status: 'active',
    };
  }
}
