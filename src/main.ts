import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;

  await app.listen(8000, '0.0.0.0');
  console.log(`Application running on port ${port}`);
}
bootstrap();

// "build": "nest build",

// "build": "nest build && docker build -t aws-try:latest .",
// await app.listen(process.env.PORT ?? 3000);
