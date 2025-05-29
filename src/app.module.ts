import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CategorysModule } from './categorys/categorys.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [
    StudentsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Cambia esto por tu usuario de MySQL
      password: 'admin', // Cambia esto por tu contraseña de MySQL
      database: 'database_vulcan', // Cambia esto por el nombre de tu base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Carga tus entidades automáticamente
      synchronize: true, // ¡Solo usar en desarrollo! En producción, usa migraciones
      autoLoadEntities: true, // Esto carga automáticamente todas las entidades registradas en los módulos
      logging: true, // Habilita logs para depuración
      // logging: ['query', 'error', 'schema', 'warn', 'info', 'log'],
    }), ProductsModule, CategorysModule, SubCategoryModule, SalesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
 