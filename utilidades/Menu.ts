import { gastoFixoMenu } from "../menus/GastoFixoMenu";
import { gastoPontualMenu } from "../menus/GastoPontualMenu";
import { Teclado } from "./Teclado";

let options: number = 0;

export function menuInicial() {
    
    while (options !== 99) {
    
    console.log("Olá, boas-vindas ao seu aplicativo financeiro pessoal.");
    console.log("Toda nossa comunicação, se dará através de respostas nesse terminal. Você poderá responder, apenas inserindo o número desejado. Casos excepcionais, serão indicados na tela. ");
    console.log("Para começar, insira o que você deseja fazer hoje:");
    console.log("1. Inserir um novo Gasto");
    console.log("2. Gerar relatório de Gastos");
    console.log("99. Fechar Programa");
    
    options = +Teclado("Escolha sua Ação:  ")

        switch (options) {
            case 1:
                menuNovoGasto()

            // case 2:
            //     menuGerarRelatorio()

            case 99:
                break;
        
            default:
                console.log("Insira um valor válido");        
        }
    
    }
}

function menuNovoGasto() {
    
    while (options !== 99) {
        console.log("\n ------------------------------------ \n" );
        console.log("Você selecionou “Inserir um Novo Gasto”.\n" );
        console.log("Para continuarmos, indique que tipo de gasto você deseja inserir: \n");
        console.log("1. Gasto Fixo");
        console.log("2. Gasto Pontual");
        console.log("0. Voltar menu Inicial");
        console.log("99. Fechar Programa");
        // console.log("3. Gasto Regular");
        // console.log("4. Gasto Parcelado");
    
        options = +Teclado("Estamos no Menu (insira):  ")

        switch (options) {
            case 0:
                menuInicial()

            case 1:
                gastoFixoMenu()

            case 2:
                gastoPontualMenu()


            case 99:
                break;
        
            default:
                console.log("Insira um valor válido");        
        }
    
    }


}


                              