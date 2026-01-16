import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
  
    // CORS configuration read from environment. FRONTEND_ORIGIN can be a
    // single origin or a comma-separated list of origins. Example:
    // FRONTEND_ORIGIN=http://localhost:4000,https://app.example.com
    const rawOrigins = process.env.FRONTEND_ORIGIN || 'http://localhost:4000';
    const allowedOrigins = rawOrigins.split(',').map(s => s.trim()).filter(Boolean);
    const allowCredentials = process.env.CORS_CREDENTIALS !== 'false';

    app.enableCors({
      origin: (origin, callback) => {
        // If no origin (e.g. curl, server-to-server) allow it
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
          return callback(null, true);
        }
        return callback(new Error('CORS origin not allowed'), false);
      },
      methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
      credentials: allowCredentials,
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
