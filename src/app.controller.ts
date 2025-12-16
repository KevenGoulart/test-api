import { Controller, Get } from '@nestjs/common';

@Controller('health-check')
export class AppController {
  @Get()
  healthCheck() {
    return {
      status: 'especial polenta e droga',
      timestamp: new Date().toISOString(),
    };
  }
}
