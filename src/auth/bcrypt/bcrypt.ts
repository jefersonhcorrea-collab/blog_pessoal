import { Injectable } from "@nestjs/common";
import { compare, hash } from "bcrypt";

@Injectable()
export class Bcrypt{
    async criptografarSenha(senha: string): Promise<string>{
    const saltos: number = 10;
    return await hash(senha,saltos); //colocar o hash do bcrypt (CUIDADO)

    }

    async comparararSenhas(senhaDigitada: string,senhaBanco: string): Promise<boolean>{
            return await compare(senhaDigitada,senhaBanco);
    }

    

}