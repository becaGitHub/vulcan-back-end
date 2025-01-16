import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
  
    app.enableCors({
      origin: 'http://localhost:9000', // Origen del frontend
      methods: 'GET,POST,PUT,DELETE,OPTIONS',
      credentials: true,
    });
    
    const config = new DocumentBuilder()
      .setTitle('Vulcan API')
      .setDescription('API to manage Vulcan Api REST')
      .setVersion('1.0')
      .build();
  
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    
    await app.listen(4000);
    // console.log('http://localhost:4000/api')
    
  } catch (error) {
    console.error('Error during application startup:', error);
  }

}
bootstrap();
