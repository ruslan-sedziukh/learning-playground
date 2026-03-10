import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // Removes properties that do not have decorators
      whitelist: true,
      // Throws an error if unknown properties are sent
      forbidNonWhitelisted: true,
      // Automatically converts types (e.g., string to number)
      transform: true,
    }),
  );

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3001',
  });

  // Required to allow Nest.js to read cookies
  app.use(cookieParser());

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
