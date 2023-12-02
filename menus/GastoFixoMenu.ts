import { adicionarGasto } from "../classes/métodos/metodosGastoFixo";
import { Teclado } from "../utilidades/Teclado";


export function gastoFixoMenu() {
    let options: number = 0;
    while (options !== 99) {
        console.log("\n ------------------------------------ \n" );
        console.log("Você selecionou 'Inserir um Gasto Fixo'");
        console.log("Gastos fixos são aqueles gastos que ocorrem mês a mês, sem alterações de valor. Exemplos comuns são: Internet, Conta de Telefone, Parcela da Faculdade, etc…");
        console.log("Selecione o que você deseja fazer agora: \n");

        console.log("1. Inserir novo Gasto Fixo");
        console.log("2. Visualizar Gastos Fixos Registrados");
        console.log("3. Alterar o valor de um Gasto Fixo");
        console.log("4. Excluir um Gasto Fixo");
        console.log("5. Ir ao Menu inicial");

        options = +Teclado("O que você deseja fazer?:  ")

        switch (options) {
            case 1:
                adicionarGasto()
                break;
        
            default:
                break;
        }
    }


    
} 
    