import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 33066,
  username: 'root',
  password: 'password',
  database: 'ambassador',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule],
})
export class AppModule {}
