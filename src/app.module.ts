import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursesModule } from './curses/curses.module';
import { StudentsModule } from './students/students.module';
import { StudentsCursesModule } from './students_curses/students_curses.module';

@Module({
  imports: [CursesModule, StudentsModule, StudentsCursesModule, TypeOrmModule.forRoot({
    type: 'mysql', // Tipo de base de datos
    host: 'localhost', // Dirección del host de la base de datos
    port: 3306, // Puerto de la base de datos
    username: 'root', // Nombre de usuario de la base de datos
    password: 'admin', // Contraseña de la base de datos
    database: 'database_vulcan', // Nombre de la base de datos
    entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Rutas a las entidades
    synchronize: true, // Sincroniza la base de datos (deshabilitar en producción)
  }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
