import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarroController } from './carro/carro.controller';

@Module({
  imports: [],
  controllers: [AppController, CarroController],
  providers: [AppService],
})
export class AppModule {}
