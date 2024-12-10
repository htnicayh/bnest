import { Module } from '@nestjs/common'
import { AppResolver } from '../resolvers/app.resolver'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true
		})
	],
	providers: [AppResolver]
})
export class AppModule {}
