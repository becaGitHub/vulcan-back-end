import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
  
    app.enableCors({
      origin: 'http://localhost:9000', // Origen del frontend
      methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
      credentials: true,
    });

    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    
    const config = new DocumentBuilder()
      .setTitle('Sales API')
      .setDescription('API to manage Sales Api REST')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
  
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    
    const port = parseInt(process.env.PORT || '4000', 10);
    await app.listen(port);
    const url = await app.getUrl();
    console.log(`Swagger disponible en: ${url}/api`);
    
  } catch (error) {
    console.error('Error during application startup:', error);
  }

}
bootstrap();
