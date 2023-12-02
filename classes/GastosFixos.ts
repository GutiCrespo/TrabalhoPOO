// gastosFixos.ts
import Gastos from "./Gastos";

class GastosFixos extends Gastos {

  constructor(nome: string, valor: number, mes: number) {
    super(nome, valor, mes)
  }

  public adicionarGasto(nomeGasto: string): string {
      const Teste = new GastosFixos(nomeGasto, 3, 3 )  
      return(Teste._nome) 
  }

  // Teste = [
  //   {
  //     nome: "internet",
  //     valor: 3,
  //     mes: 3
  //   }
  // ]

  public exibirGasto(): void {
    console.log(
      `Gasto Fixo - Nome: ${this._nome}, Valor: R$${this._valor.toFixed(2)}`
    );
  }
}

export default GastosFixos;




