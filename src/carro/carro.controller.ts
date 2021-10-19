import { Controller, Get, Res } from '@nestjs/common';
import { Response, response } from 'express';

@Controller('carro')
export class CarroController {

    @Get()
    
    findAll(): string{
        return "Todos os carros serão devolvidos neste método";
    }

    @Get('response')
    findAllResponse(@Res() response: Response){
        return response.status(200).send("todos os carros estão disponíveis");
    }
}
