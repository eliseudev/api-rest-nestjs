import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosServices } from "./livros.services";

@Controller('livros')
export class LivrosController{

    constructor(private livrosServices: LivrosServices){

    }

    @Get()
    async obterTodos() : Promise<Livro[]>{
        return this.livrosServices.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Livro> {
        return this.livrosServices.obterUm(params.id);
    }

    @Post()
    async criar(@Body() produto: Livro){
        this.livrosServices.criar(produto);
    }

    @Put()
    async alterar(@Body() livro: Livro): Promise<[number, Livro[]]>{
        return this.livrosServices.alterar(livro);
    }
    
    @Delete(':id')
    async apagar(@Param() params){
        this.livrosServices.apagar(params.id);
    }
}