import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // some prisma relate stuff
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  // swagger stuff
  const swaggerConfig = new DocumentBuilder()
    .setTitle('open-form API')
    .setDescription('Backend Rest API for open-forms client app')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
