import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

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

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
