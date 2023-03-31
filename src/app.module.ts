import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CacheService } from 'infrastructure/cache';
import { setEnvironment } from 'infrastructure/environments';


import { HealthController } from 'infrastructure/terminus/index';
import { MulterModule } from '@nestjs/platform-express';
import { PatientModule } from 'infrastructure/ioc/patient.module';
import { DoctorModule } from 'infrastructure/ioc/doctor.module';
import { ScheduleModule } from '@nestjs/schedule';
import { EmailModule } from 'infrastructure/ioc/email.module';

@Module({
  imports: [
    PatientModule,
    DoctorModule,
    EmailModule,
    
    
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: setEnvironment(),
    }),
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5439,
      username: 'morgan',
      password: 'test',
      database: 'medbase',
      entities: [__dirname + '/**/common/entities/*.entity{.ts,.js}'],
      // entities: [UserEntity],
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
   
    CacheModule.registerAsync({
      useClass: CacheService,
    }),
    ScheduleModule.forRoot(),
    TerminusModule,
  ],
  controllers: [HealthController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
