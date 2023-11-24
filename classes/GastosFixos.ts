// gastosFixos.ts
import Gastos from "./Gastos";

class GastosFixos extends Gastos {

  constructor(nome: string, valor: number, mes: number) {
    super(nome, valor, mes)
  }

  public exibirGasto(): void {
    console.log(
      `Gasto Fixo - Nome: ${this.nome}, Valor: R$${this.valor.toFixed(2)}`
    );
  }
}

export default GastosFixos;
