import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import 'reflect-metadata'
import { AppModule } from './modules/app.module'

async function bootstrap() {
	const APPLICATION = 'NestApplication'
	const logger = new Logger(APPLICATION)
	const app = await NestFactory.create(AppModule, new FastifyAdapter())

	await app.listen(process.env.PORT || 3000)

	logger.log(
		`Application is running on: \x1b[31m${`${await app.getUrl()}`}\x1b[0m`
	)
}

bootstrap()
