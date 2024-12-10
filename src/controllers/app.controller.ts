import { Controller, Get } from '@nestjs/common'
import { AppService } from '../services/app.service'

@Controller('v1')
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('/')
	getHello() {
		return this.appService.getHello()
	}
}
