import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; // For environment variables
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './item/items.module';
// import * as path from 'path';
// Import your entities here
// import { User } from './user/user.entity'; // Example entity

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigService available globally
      envFilePath: '.env', // Specify your .env file path
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres', // Or 'mysql', 'sqlite', etc.
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'], // Automatically load entities
        synchronize: true, // NEVER use this in production! For development only.
        logging: true, // Enable logging of SQL queries
        // entities: [...path.join(__dirname, '/**/*.entity{.ts,.js}')],
      }),
    }),
    // Add your feature modules here (e.g., UserModule)
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
